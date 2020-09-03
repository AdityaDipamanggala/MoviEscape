const mongoose = require('mongoose')
const {Decimal128} = require('mongodb')
const bcrypt = require('bcrypt')

let favouriteMovieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type: String,
        required: [true, "Title can't be empty"]
    },
    poster:{
        type: String,
        required: [true, "Poster URL can't be empty"]
    },
    description:{
        type: String,
        required: [true, "Description can't be empty"]
    },
    video:{
        type: String,
        required: [true, "Please fill the video URL"]
    },
    review:{
        type: String
    },
    rating:{
        type: Decimal128
    }
})

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: [true, "Email has been used"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email can't be empty"]
    },
    username: {
        type: String,
        required: [true, "Username can't be empty"],
        min: [4, "Username is too short"],
        max: [20, "Username is too long"]
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        min: [6, "Password is too weak"]
    },
    role: {
        type: String
    },
    favouriteList:[favouriteMovieSchema]
})

userSchema.pre('save', function(next){
    let user = this
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password,salt)
    user.password = hash
    next()
})

module.exports = mongoose.model('User',userSchema)
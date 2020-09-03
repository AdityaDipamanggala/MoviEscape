const mongoose = require('mongoose')
const User = require('./userModel')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController{
    static register(req,res){
        const newUser = new User ({
            _id : new mongoose.Types.ObjectId(),
            email : 'admin@email.com',
            username : 'admin',
            password : 'password',
            role : req.params.role
        })
        newUser.save()
        .then(data => res.status(200).json({message: 'Register Successful'}))
        .catch(err => {
            res.status(500).json({message: "Internal Server Error", err})
            console.log(err)
        })
    }
    static login(req,res){
        User.findOne({username: req.body.username})
        .then(data => {
            if(data && data.role === req.params.role && bcrypt.compareSync(req.body.password,data.password)){
                let token = jwt.sign({id: data._id, email: data.email, username: data.username, role: data.role},process.env.JWT_KEY)
                res.status(200).json({message: 'Login successfully', acess_token: token})
            }
            else res.status(400).json({message: 'Invalid User'})
        })
        .catch(err =>{ 
            res.status(500).json({message: 'Internal Server Error'})
            console.log(err)
        })
    }
    
}

module.exports = UserController
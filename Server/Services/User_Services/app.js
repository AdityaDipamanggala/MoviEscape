const express = require("express")
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT

mongoose.connect("mongodb://localhost:27017/moviescape",{useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/", require('./routes'))
app.listen(PORT,() => {
    console.log("User's server running on port", PORT);
})
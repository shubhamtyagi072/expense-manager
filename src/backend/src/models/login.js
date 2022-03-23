const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    name:String,
    email:String
})

const LoginModel = mongoose.model('Login',Login)

module.exports = LoginModel
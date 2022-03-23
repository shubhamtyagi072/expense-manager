const express = require('express')
const {login} = require('../controller/Login')

const route = express.Router()

/* 
json = {name:"Shubham" , emailId:"shubhamtyagi072@gmail.com"}
*/
route.post('/login',login)

module.exports = route
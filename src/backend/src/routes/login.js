const express = require('express')
const {login} = require('../controller/Login')
const {expense} = require('../controller/Expense')
const ExpenseModel = require('../models/Expense')
const {getMonth} = require('../utlils/getmonth')


const route = express.Router()

/* 
json = {name:"Shubham" , emailId:"shubhamtyagi072@gmail.com"}
*/
route.post('/login',login)
/* 
json = {date:"2022-3-11" , item:"maggie", price:14, quantity:4}
*/
route.post('/expense',expense)
route.post('/user',async (req,res) => {
   const result = await ExpenseModel.find({user_id: req.body.user_id})
   res.send(result)
})

module.exports = route
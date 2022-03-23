const ExpenseModel = require('../models/Expense')

exports.expense = async (req,res) => {
   const expen = new ExpenseModel(req.body)
   const result = await expen.save()
   res.send(result)
}
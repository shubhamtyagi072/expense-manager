const LoginModel = require('../models/login')

exports.login = async (req,res) => {
   const user = new LoginModel(req.body)
   const result = await user.save()
   res.send(result)
}
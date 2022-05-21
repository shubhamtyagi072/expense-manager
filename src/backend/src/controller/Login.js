const LoginModel = require('../models/login')

exports.login = async (req,res) => {
   const find = await LoginModel.find({email:req.body.email})
   console.log("login",req.body)
   if (find.length > 0) {
       res.send(find[0])
       return
   }
   const user = new LoginModel(req.body)
   const result = await user.save()
   res.send(result)
}
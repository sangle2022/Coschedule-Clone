
const Routes=require('express');
const { UserModel } = require('../Model/user.model');
var jwt=require('jsonwebtoken')

const userController=Routes()

userController.get("/",async(req,res)=>{
    const users=await UserModel.find()
    res.send(users)
})


userController.post("/signup",async(req,res)=>{
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;

    console.log(req.body);
    const {email, password}=req.body
    const repeat=await UserModel.findOne({email})
    if (repeat) {
        return res.send("User already exists")
    }
    else if (!password.match(passw)) {
      return res.send("Password must be strong");
    } 
    else {
        const user= new UserModel(req.body)

    await user.save()
    res.send("Stored Data Successfully")
    }
    
})

userController.post("/signin",async(req,res)=>{
    const {email, password}=req.body

    const isValid=await UserModel.findOne(req.body)
    console.log(isValid)
    if(isValid==null){
      return res.send("Please enter correct data")
    }
    else{
        res.send("sign in successfully")
    }
   

})


module.exports={
    userController
}

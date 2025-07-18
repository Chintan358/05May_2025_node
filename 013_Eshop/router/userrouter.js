const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt  =require("bcryptjs")


router.post("/userreg",async (req,resp)=>{
        try{

            const user = new User(req.body)
            const savedData =  await user.save()
            resp.render("login-register",{"msg":"Registration successfully!!!"})

        }catch(err){
            console.log(err);
            
        }     
})

router.post("/userlogin",async(req,resp)=>{
    try {

        const {email,password} = req.body

        const user = await User.findOne({email:email})
        if(user)
        {
            const isCheck =  await bcrypt.compare(password,user.password)
            if(isCheck)
            {
                    resp.redirect("/")
            }
            else{
                resp.render("login-register",{"err":"Invalid credentials"})
            }
        }
        else{
            resp.render("login-register",{"err":"Invalid credentials"})
        }


    } catch (error) {
        console.log(error);
        
    }
})

module.exports=router
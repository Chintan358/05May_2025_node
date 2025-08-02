const jwt = require("jsonwebtoken")
const user = require("../model/users")

const auth =async (req,resp,next)=>{
        
        try {

             const token =  req.cookies.jwt
    
       const tokenInfo =  await jwt.verify(token,process.env.SKEY)

       const loginduser = await user.findOne({_id:tokenInfo.id})
        
       if(loginduser)
       {
         next()
       }
       else
       {
          resp.render("login-register",{"msg":"Please login first !!!"})
       }
            
        } catch (error) {
            console.log(error);
            
             resp.render("login-register",{"msg":"Something went wrong !!!"})
        }
      
        
        
}

module.exports= auth
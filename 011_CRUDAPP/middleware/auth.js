const jwt  =require("jsonwebtoken")
const User = require("../model/users")
const auth = async (req,resp,next)=>{

        var token = req.cookies.jwt
        
        try {
            const verified =  await jwt.verify(token,process.env.SKEY)
            if(verified)
            {
                
                const user =  await User.findOne({_id:verified._id})

                const isToken =  user.Tokens.find(ele=>ele.token==token)
                if(isToken==undefined)
                {
                    resp.render("login",{"err":"Pls login first !!!!"})
                }
                else
                {
                 req.user = user
                 req.token = token
                 next()
                }
            }
            else{
                resp.render("login",{"err":"Pls login first !!!!"})
            }

        } catch (error) {
            resp.render("login",{"err":"Pls login first !!!!"})
        }
    

            
   
}


module.exports=auth
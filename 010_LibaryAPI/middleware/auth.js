const jwt  =require("jsonwebtoken")

const auth = async (req,resp,next)=>{

            const token = req.header('auth-token')

            try {
                const verified =  await jwt.verify(token,process.env.SKEY)
           
                if(verified)
                {
                    next()
                }
                else
                {
                    resp.send("Invalid token")
                }
            } catch (error) {
                resp.send("Invalid token")
            }
            
            
            
            //next()
}

module.exports=auth
const router = require("express").Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const multer = require("multer")
const auth  =require("../middleware/auth")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/upload");
    },
    filename: function (req, file, cb) {
    
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.get("/",(req,resp)=>{
    resp.render("login")
})

router.get("/reg",(req,resp)=>{
    resp.render("reg")
})

router.post("/registration",upload.single('profile'),async(req,resp)=>{


    const filename = req.file.filename
   
    req.body.image = filename
    try {
        
        const user = new User(req.body)
        const savedUSer = await user.save()
        if(savedUSer)
        {
            resp.render("reg",{"msg":"Registration successfully !!!"})
        }

    } catch (error) {
        
    }

})

router.post("/login",async(req,resp)=>{
    try {

        const userdata = await User.findOne({"username":req.body.username})



        const isCheck =   await bcrypt.compare(req.body.password,userdata.password)
        if(!isCheck)
        {
            resp.render("login",{"err":"Invalid credentials !!!"})
        }
        else{

            if(userdata.Tokens.length>=3)
            {
                return  resp.render("login",{"err":"Max user limit reached !!!"})
            }

            const token =  await userdata.generateToken()
            resp.cookie("jwt",token)
           // resp.render("home",{"user":userdata.username})
            resp.redirect("home")
            
        }
    } catch (error) {
        console.log(error);
        
        resp.render("login",{"err":"Invalid credentials !!!"})
    }
})


router.get("/home",auth,(req,resp)=>{

    user = req.user
  
    resp.render("home",{"user":user})
})

router.get("/logout",auth,async(req,resp)=>{

    const ctoken = req.token
    const user = req.user

    user.Tokens =  user.Tokens.filter(ele=>ele.token!=ctoken)
    user.save()
    resp.clearCookie("jwt")
    resp.render("login")
})

router.get("/logoutall",auth,async(req,resp)=>{

   
    const user = req.user
    user.Tokens = []
    user.save()
    resp.render("login")
})


module.exports=router





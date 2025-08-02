const express = require("express")
const router = express.Router()
const auth = require("../auth/auth")

router.get("/",(req,resp)=>{
        
    
    resp.render("index")   
})

router.get("/accounts",auth,(req,resp)=>{
    resp.render("accounts")
})

router.get("/cart",auth,(req,resp)=>{
    resp.render("cart")
})

router.get("/checkout",auth,(req,resp)=>{
    resp.render("checkout")
})

router.get("/compare",(req,resp)=>{
    resp.render("compare")
})

router.get("/details",(req,resp)=>{
    resp.render("details")
})

router.get("/login_register",(req,resp)=>{
    resp.render("login-register")
})

router.get("/shop",(req,resp)=>{
    resp.render("shop")
})

router.get("/wishlist",auth,(req,resp)=>{
    resp.render("wishlist")
})

router.get("/logout",auth,(req,resp)=>{

    resp.clearCookie("jwt")
    resp.redirect("/")
})






module.exports=router
const express = require("express")
const router = express.Router()


router.get("/",(req,resp)=>{
    resp.render("index")
})

router.get("/accounts",(req,resp)=>{
    resp.render("accounts")
})

router.get("/cart",(req,resp)=>{
    resp.render("cart")
})

router.get("/checkout",(req,resp)=>{
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

router.get("/whishlist",(req,resp)=>{
    resp.render("whishlist")
})






module.exports=router
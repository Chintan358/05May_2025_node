const express = require("express")
const router = express.Router()
const Author = require("../model/authors")
const auth = require("../middleware/auth")

router.get("/",async (req,resp)=>{
    try {
        const allAuthors = await Author.find()
        resp.send(allAuthors)
    } catch (error) {
        resp.send(error)
    }
})



router.post("/",auth,async(req,resp)=>{
    try {
        const author = new Author(req.body)
        const createAuthor = await author.save()
        resp.send(createAuthor)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id",async(req,resp)=>{  
       try {

        const id = req.params.id
        const auther = await Author.findById(id)
        resp.send(auther)
        
       } catch (error) {
        resp.send(error)
       }  
})

router.put("/:id",auth,async(req,resp)=>{
    try {

        const id = req.params.id
        const auther = await Author.findByIdAndUpdate(id,req.body)
        resp.send(auther)
        
       } catch (error) {
        resp.send(error)
       }  
})

router.delete("/:id",auth,async(req,resp)=>{
    try {

        const id = req.params.id
        const auther = await Author.findByIdAndDelete(id)
        resp.send(auther)
        
       } catch (error) {
        resp.send(error)
       }  
})


module.exports=router
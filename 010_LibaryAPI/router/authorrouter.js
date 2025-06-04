const express = require("express")
const router = express.Router()
const Author = require("../model/authors")


router.get("/",async (req,resp)=>{
    try {
        const allAuthors = await Author.find()
        resp.send(allAuthors)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/",async(req,resp)=>{
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

router.put("/:id",async(req,resp)=>{
    try {

        const id = req.params.id
        const auther = await Author.findByIdAndUpdate(id,req.body)
        resp.send(auther)
        
       } catch (error) {
        resp.send(error)
       }  
})

router.delete("/:id",async(req,resp)=>{
    try {

        const id = req.params.id
        const auther = await Author.findByIdAndDelete(id)
        resp.send(auther)
        
       } catch (error) {
        resp.send(error)
       }  
})


module.exports=router
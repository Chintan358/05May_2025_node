const express = require("express")
const app = express()
require("dotenv").config()
const  mongoose = require("mongoose")
const PORT = process.env.PORT
const DBURL = process.env.DBURL

mongoose.connect(DBURL).then(()=>{
    console.log("Db connected...");
}).catch(err=>{
    console.log(err);
})


app.use(express.json())
const StudentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    age : {
        type : Number
    }
})

const Student = new mongoose.model("Student",StudentSchema)



app.get("/students",async (req,resp)=>{
    // resp.send("Get api calling")
    try {
        const allStudents = await Student.find()
        resp.send(allStudents)
    } catch (error) {
        resp.send(error)
    }

})


app.post("/students",async (req,resp)=>{
   // resp.send("post api calling")
    try {

        const student = new Student(req.body)
        const data = await student.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
   
})

app.put("/students/:id",async(req,resp)=>{

    const id = req.params.id
    //resp.send("put api calling")
    try {
        
        const data = await Student.findByIdAndUpdate(id,req.body)
        resp.send(data)

    } catch (error) {
        resp.send(error)
    }
  
})

app.delete("/students/:id",async (req,resp)=>{
    // resp.send("delete api calling")
    try {
        const data = await Student.findByIdAndDelete(req.params.id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})





app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})


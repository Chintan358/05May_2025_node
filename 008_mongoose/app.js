const mongoose = require("mongoose")
require("dotenv").config()

const URL = process.env.URL

mongoose.connect(URL).then(()=>{
    console.log("db connected");
}).catch(err=>{
    console.log(err);
})



const studentSchema = new mongoose.Schema({
    rollNo : {
        type : Number,
        unique : true
    },
    name : {
        type : String,
        required:[true,"Name is required"],
        uppercase:true
    },
    email : {
        type : String,
        unique : true
    },
    phone : {
        type : Number
    },
    gender : {
        type: String,
        enum : ["male","female"]
    }
})


const Student = new mongoose.model("Student",studentSchema)


const addStudent = async()=>{

        try{
            const st = new Student({rollNo:2,name:"manav",email:"manav1@gmail.com",phone:"7485968574",gender:"male"})
            const data =  await st.save()
            console.log(data);
        }catch(err){
            console.log(err);
            
        }
       
        

}


addStudent()

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

const addManyStudents = async ()=>{
    try {
        
        const s1 = new Student({rollNo:5,name:"abc",email:"abc@gmail.com",phone:"7485968574",gender:"female"})
        const s2 = new Student({rollNo:6,name:"Misbah",email:"misbah@gmail.com",phone:"7485968574",gender:"female"})
        const s3 = new Student({rollNo:7,name:"xyz",email:"xyz@gmail.com",phone:"7445968574",gender:"male"})

        const data = await Student.insertMany([s1,s2,s3])
        console.log(data);
        


    } catch (error) {
        console.log(error);
        
    }
}

const viewallStudents = async ()=>{

        try {
            const data = await Student.find()
            console.log(data);
            
        } catch (error) {
                console.log(error);
                
        }
}

const querydData = async ()=>{
    try {

        const data = await Student.find({gender: {$eq:"male"}})
        console.log(data);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

const updateStudent = async ()=>{
    try {
        
        const data = await Student.updateOne({name:"manav"},{$set:{email:"danav@gmail.com",age:30}},{upsert:true})
        console.log(data);      

    } catch (error) {
            console.log(error);
            
    }
}





// addStudent()
// addManyStudents()
 viewallStudents()
// querydData()
// updateStudent()
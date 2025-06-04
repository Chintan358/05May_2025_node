const mongoose = require("mongoose")


const authorSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    gender  :{
        type : String
    }
})

const Author = new mongoose.model("Author",authorSchema)

module.exports=Author
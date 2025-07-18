const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({

    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

UserSchema.pre("save",async function(){

    if(this.isModified("password"))
    {
      this.password = await bcrypt.hash(this.password,10)
    }
})


module.exports=new mongoose.model("User",UserSchema)
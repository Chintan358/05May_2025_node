const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username : {
        type:String
    },
    email : {
        type:String
    },
    password : {
        type : String
    },
    phone : {
        type : Number
    },
    image : {
        type : String
    },
    Tokens : [
        
        {     
            token : {
                type : String
            } 
        }
    ]


})

userSchema.pre("save",async function(){

    if(this.isModified("password")){
       this.password = await bcrypt.hash(this.password,10)
    }

})

userSchema.methods.generateToken = async function(){

        const token =  await jwt.sign({_id:this._id},process.env.SKEY)
        this.Tokens =  this.Tokens.concat({token:token})
        this.save()
        return token
      
}

module.exports = new mongoose.model("User",userSchema)
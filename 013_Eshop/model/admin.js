
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const AdminSchema = new mongoose.Schema({

    email: {
        type: String
    },
    password: {
        type: String
    }
})



module.exports = new mongoose.model("Admin", AdminSchema)
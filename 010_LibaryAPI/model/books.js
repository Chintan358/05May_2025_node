const mongoose = require("mongoose");
const Author = require("./authors");
const Publisher = require("./publisher");


const bookSchema = new mongoose.Schema({
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author' // Reference to Author model
        },
        publisher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Publ`isher' // Reference to Publisher model
        },
        name : {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        qty : {
            type: Number,
            required: true
        }
})

module.exports = mongoose.model("Book", bookSchema);
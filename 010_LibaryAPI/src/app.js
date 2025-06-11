const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const DBURL = process.env.DBURL
const mongoose = require("mongoose")
app.use(express.json())
const cors = require("cors")
app.use(cors())
mongoose.connect(DBURL).then(()=>{
    console.log("Db connected"); 
}).catch(err=>{
    console.log(err);
})


app.use("/authors",require("../router/authorrouter"))
app.use("/publishers",require("../router/publisherrouter"))
app.use("/books",require("../router/bookrouter"))


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
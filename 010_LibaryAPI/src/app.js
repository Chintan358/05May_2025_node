const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const DBURL = process.env.DBURL
const mongoose = require("mongoose")
app.use(express.json())
mongoose.connect(DBURL).then(()=>{
    console.log("Db connected"); 
}).catch(err=>{
    console.log(err);
})


app.use("/authors",require("../router/authorrouter"))
app.use("/publishers",require("../router/publisherrouter"))


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
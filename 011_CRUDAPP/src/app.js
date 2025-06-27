const express = require('express');
const app = express();
require("dotenv").config()
const PORT = process.env.PORT
const path = require("path")
const DBURL = process.env.DBURL
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

mongoose.connect(DBURL).then(()=>{
    console.log("Db connected");
}).catch(err=>{
    console.log(err);
})

app.use(cookieParser())
app.use(bodyParser.urlencoded())
const viewPath = path.join(__dirname,"../templates/views")
const publicpath = path.join(__dirname,"../public")





app.set("view engine","hbs")
app.set("views",viewPath)
app.use(express.static(publicpath))

app.use("",require("../router/homerouter"))

app.listen(PORT,()=>{
    console.log("server running on port : "+PORT); 
})

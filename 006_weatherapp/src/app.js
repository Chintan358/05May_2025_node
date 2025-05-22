const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
require("dotenv").config()
const axios = require("axios")
const exp = require("constants")
const PORT = process.env.PORT
const geocode = require("../utill/geocode")
const weather  = require("../utill/weather")

const viewpath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")
const publicpath = path.join(__dirname,"../public")

app.set("view engine","hbs")
app.set("views",viewpath)
app.use(express.static(publicpath))


app.get("/weather",async(req,resp)=>{
   const cityname =   req.query.city
   const result = await geocode.geocodedata(cityname)
   const data = await weather.weatherdata(result.lat, result.lng)
   resp.send(data)
})


app.get("/",(req,resp)=>{
    resp.render("index")
})

app.listen(PORT,()=>{
    console.log("Server running on port "+PORT); 
})

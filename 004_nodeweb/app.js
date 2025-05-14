const express = require("express");
const app = express();
const PORT = 3000;
const geocode = require("./util/geocode")
const weather  = require("./util/weather")
const path = require("path")

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
  // res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,"about.html"))
   // res.send("About us!");
  });

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname,"contact.html"))
    // res.send("Contact us!");
});

app.get("/weather",async(req,resp)=>{

    const cityname =   req.query.city
    console.log(cityname);
    
   const result = await geocode.geocodedata(cityname)
   const data = await weather.weatherdata(result.lat, result.lng)
   resp.send(data)
   

})

app.use((req,resp)=>{
  resp.send("not found")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
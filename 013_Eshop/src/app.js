const express = require("express")
const app = express()
require("dotenv").config()
const path = require("path")
const hbs  = require("hbs")
const PORT = process.env.PORT

const viewpath = path.join(__dirname,"../templates/views")
const publicpath = path.join(__dirname,"../public")
const partialpath = path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")
app.set("views",viewpath)
app.use(express.static(publicpath))
hbs.registerPartials(partialpath)


app.use("/",require("../router/homerouter"))

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:3000`);
})




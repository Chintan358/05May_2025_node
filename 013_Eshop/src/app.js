const express = require("express")
const app = express()
require("dotenv").config()
const path = require("path")
const hbs = require("hbs")
const PORT = process.env.PORT
const DBURL = process.env.DBURL
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(bodyParser.urlencoded())



mongoose.connect(DBURL).then(() => {
    console.log("db connected");

}).catch(err => {
    console.log(err);

})


const viewpath = path.join(__dirname, "../templates/views")
const publicpath = path.join(__dirname, "../public")
const partialpath = path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs")
app.set("views", viewpath)
app.use(express.static(publicpath))
hbs.registerPartials(partialpath)


app.use("/", require("../router/homerouter"))
app.use("/", require("../router/userrouter"))
app.use("/", require("../router/adminrouter"))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:3000`);
})




const express = require("express")
const router = express.Router()
const adminauth = require("../auth/adminauth")
const jwt = require("jsonwebtoken")

const Admin = require("../model/admin")

router.get("/dashboard", adminauth, (req, resp) => {

    resp.render("dashboard")

})

router.get("/admin", (req, resp) => {
    resp.render("adminlogin")
})

router.post("/adminlogin", async (req, resp) => {

    const { email, password } = req.body
    try {

        const admindata = await Admin.findOne({ email: email })

        if (admindata.password == password) {

            const token = await jwt.sign({ "id": admindata._id }, process.env.AKEY)
            resp.cookie("ajwt", token)
            resp.redirect("dashboard")
        }
        else {
            resp.render("adminlogin", { "err": "Invalid credentials" })
        }

    } catch (error) {
        console.log(error);

        resp.render("adminlogin", { "err": "something went wrong !!!" })
    }
})

router.get("/adminlogout", (req, resp) => {
    resp.clearCookie("ajwt")
    resp.render("adminlogin")
})
module.exports = router


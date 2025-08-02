const jwt = require("jsonwebtoken")
const Admin = require("../model/admin")

const adminauth = async (req, resp, next) => {

  try {

    const token = req.cookies.ajwt
    console.log(token);

    const tokenInfo = await jwt.verify(token, process.env.AKEY)

    const loginduser = await Admin.findOne({ _id: tokenInfo.id })

    if (loginduser) {
      next()
    }
    else {
      resp.render("adminlogin", { "err": "Please login first !!!" })
    }

  } catch (error) {
    console.log(error);

    resp.render("adminlogin", { "err": "Something went wrong !!!" })
  }



}

module.exports = adminauth
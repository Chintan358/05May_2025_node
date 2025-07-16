const nodemailer = require('nodemailer');
const express = require("express")
const app= express()
const port = 3000
const path = require("path");
const bodyParser = require("body-parser")
var unirest = require("unirest");

app.use(bodyParser.urlencoded())

const viewPath = path.join(__dirname,"../templates/views")

app.set("view engine","hbs")
app.set("views",viewPath)


app.get("/",(req,resp)=>{
    resp.render("index")
})

app.post("/mail",(req,resp)=>{   

    

    const data = req.body
    
    

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chintan.tops@gmail.com',
          pass: 'vccx rhya iabo crsd'
        }
      });
      
      let mailOptions = {
        from: `${data.email} <chintan.tops@gmail.com>`,
        to: "chintan.tops@gmail.com",
        subject: data.subject,
        text: `hiii you get mail from ${data.email} `,
        html:`<h1>Hello testing....</h1>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          resp.render("index")
        }
      });
    
})


app.get("/sms",(req,resp)=>{


  

  var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");
  
  req.query({
    "authorization": "     ",
    "message": "This is a test message",
    "language": "english",
    "route": "q",
    "numbers": "9898014786",
  });
  
  req.headers({
    "cache-control": "no-cache"
  });
  
  
  req.end(function (res) {
    if (res.error) throw new Error(res.error);
  
    console.log(res.body);
  });
  


})

  app.listen(port,()=>{
    console.log("server running ....");
    
  })


  
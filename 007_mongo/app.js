const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient

const url = "mongodb+srv://test:test@cluster0.zxxffa3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoClient.connect(url).then((data)=>{
   

    const db = data.db("Tops")
    // console.log("db connected");

    // db.createCollection("emp").then((data)=>{
    //     console.log("collection created...");
        
    // })

    // db.collection("student").find().toArray().then(data=>{
        
    //     data.map(ele=>{
    //         console.log(ele.name);
            
    //     })
        
    //  })

    s1 = {name:"Manav",email:"manav@gmail.com"}
    db.collection("student").insertOne(s1).then(data=>{
        console.log(data);
        
    }).catch(err=>{
        console.log(err);
        
    })



    
})
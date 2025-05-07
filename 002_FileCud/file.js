const { log } = require("console");
const fs = require("fs")

const adddata = (data)=>{
    
    const alldata =  load()
    alldata.push(data)
    
    const jsondata =  JSON.stringify(alldata)
    fs.writeFileSync("db.json",jsondata)
    console.log("Data inserted !!!");
       
}

const viewData = ()=>{
    const alldata = load()
    console.log(alldata);
    
}
const load = ()=>{

    try {
        const data = fs.readFileSync("db.json",'utf-8')
         const objdata = JSON.parse(data)
         return objdata
    } catch (error) {
        return [];
    }
   
   
}

module.exports={adddata,viewData}
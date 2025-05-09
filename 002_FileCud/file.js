const { log } = require("console");
const fs = require("fs")

const adddata = (data)=>{
    
    const alldata =  load()

    const duplicate =  alldata.find(ele=>{
        return ele.name == data.name
    })

    if(duplicate){
        console.log("Name already exist !!!");
        return
    }


    alldata.push(data)
    
    const jsondata =  JSON.stringify(alldata)
    fs.writeFileSync("db.json",jsondata)
    console.log("Data inserted !!!");
       
}

const viewData = ()=>{
    const alldata = load()
    console.log(alldata);
    
}

const removedata = (name)=>{

        const alldata = load()
        const newdata = alldata.filter(ele=>{
            return ele.name != name
        })

  
        

        const jsondata =  JSON.stringify(newdata)
        fs.writeFileSync("db.json",jsondata)
        console.log("Data removed !!!");

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

module.exports={adddata,viewData,removedata}
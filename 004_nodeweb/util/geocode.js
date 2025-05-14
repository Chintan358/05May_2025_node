const axios = require("axios")

// const geocodedata = (city,callback)=>{

//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=fe714c15cc3041939a0dae4cc4211042`
//     axios.get(url).then(resp=>{
//         const data = resp.data.results[0].geometry
//         const lat  =data.lat
//         const lng = data.lng
        
//         callback({lat,lng})


//     }).catch(err=>{
//         callback(undefined,err)
        
//     })
// }



const geocodedata = (city)=>{

    return new Promise((resolve,reject)=>{
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=fe714c15cc3041939a0dae4cc4211042`
        axios.get(url).then(resp=>{
        const data = resp.data.results[0].geometry
        const lat  =data.lat
        const lng = data.lng
        
        resolve({lat,lng})


    }).catch(err=>{
        reject(err)
        
    })
    })

    
}

module.exports = {geocodedata} 
const axios  =require("axios")


const lat = 21.17
const lon = 72.83
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b274b6a8139a5eeae5571f298f7258e&units=metric`

axios.get(url).then(result=>{
    var data = result.data.main
   
    const temp = data.temp
    const humidity = data.humidity;
    const pressure = data.pressure
    const  name = result.data.name
    
    console.log(`
        
        City : ${name}
        Temp : ${temp}
        Pressure : ${pressure}
        Humidity : ${humidity}
        
        `);
    
    

}).catch(err=>{
    console.log(err);
    
})


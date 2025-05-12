const weather = require("./weather")
const geocode = require("./geocode")

const cityname = process.argv[2]
if(!cityname)
{
    console.log("enter city name : ");
    
}

geocode.geocodedata(cityname,({lat,lng},err)=>{

    if(err)
    {
        console.log(err);
        return        
    }

    
    weather.weatherdata(lat,lng,(data,err)=>{
        if(err)
        {
            console.log(err);
            return
        }
        
        console.log(`
            
            City : ${data.name}
            Lat : ${lat}
            Lng : ${lng} 
            Temp : ${data.temp}           
            Pressure : ${data.pressure}
            Humidity : ${data.humidity}
            `);
        
    })
})
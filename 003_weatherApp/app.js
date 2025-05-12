const weather = require("./weather")
const geocode = require("./geocode")

const cityname = process.argv[2]
if(!cityname)
{
    console.log("Pls enter city name");
    return;
}

// geocode.geocodedata(cityname,({lat,lng},err)=>{

//     if(err)
//     {
//         console.log(err);
//         return        
//     }

    
//     weather.weatherdata(lat,lng,(data,err)=>{
//         if(err)
//         {
//             console.log(err);
//             return
//         }
        
//         console.log(`
            
//             City : ${data.name}
//             Lat : ${lat}
//             Lng : ${lng} 
//             Temp : ${data.temp}           
//             Pressure : ${data.pressure}
//             Humidity : ${data.humidity}
//             `);
        
//     })
// })


// geocode.geocodedata(cityname).then(({lat,lng})=>{
//        return weather.weatherdata(lat,lng)
        
// }).then(data=>{

//     console.log(`
            
//                     City : ${data.name}
//                     Temp : ${data.temp}           
//                     Pressure : ${data.pressure}
//                     Humidity : ${data.humidity}
//                     `);

// }).catch(err=>{
//     console.log(err);
    
// })


const getweather = async(cityname)=>{

    try {
        const {lat,lng} = await geocode.geocodedata(cityname)
    const data =  await weather.weatherdata(lat,lng)
    console.log(`
            
                    City : ${data.name}
                    Lat : ${lat}
                    Lng : ${lng} 
                    Temp : ${data.temp}           
                    Pressure : ${data.pressure}
                    Humidity : ${data.humidity}`);
    } catch (error) {
        console.log(error);
        
    }
    
                
            

}

getweather(cityname)

var cityname;
const getcityname = ()=>{

    cityname = document.getElementById("search").value 
    
    
    fetch(`/weather?city=${cityname}`).then(resp=>{
        return resp.json()
    }).then(result=>{
        
        city.innerHTML = result.name
        temp.innerHTML = result.temp  
        pressure.innerHTML = result.pressure  
        humidity.innerHTML = result.humidity  
        
    }).catch(err=>{
        //console.log(err);
        cityname = prompt("enter city name ")
        document.getElementById("search").value =cityname
        getcityname()
    })


}


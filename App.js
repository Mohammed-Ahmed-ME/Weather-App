const getloc = require('./getCordinates')
const getWeather = require('./getWeather')
const prompt = require('prompt-sync')({sigint: true});
let city;
if (!process.argv[2]){
     city = prompt("Enter City Name: ")
}
else {
     city = process.argv[2]
}
getloc(city, (error,loc,city)=>{
    if (error === undefined)
    {
        console.log("Your City: " + city)

        getWeather(loc.lat , loc.lon , ({temperature, windSpeed,description} = {} )=>{
                    console.log("The Temperature is : " + temperature +
                        " The Wind Speed: " + windSpeed + " The Weather is lock like : "+
                        description)})
    }
    else {
        if (error.toString() === "Error: getaddrinfo ENOTFOUND api.mapbox.com")
        {
            console.log ("Error Please Connect To The Internet")
        }
        else {
            console.log("Error Please Provide a Valid Location")
        }
    }
})




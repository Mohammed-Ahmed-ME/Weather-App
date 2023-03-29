const axios = require("axios");
const getWeather = (lon , lat , callback)=>{
    const APIKey = "Replace text with you  API that you have from DarkSky"
    const urlWeather =  "https://api.darksky.net/forecast/"+ APIKey + lat +","+ lon +"?units=si"
    axios.get(urlWeather).then( ({data}) => {
        const weatherData = {
            temperature : data.currently.temperature,
            windSpeed : data.currently.windSpeed,
            description : data.currently.summary,
        }
        callback(weatherData , undefined)} )
}
module.exports = getWeather
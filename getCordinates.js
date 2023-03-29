const axios = require("axios");
const getloc = (city,callback)=>{
    const accessToken = "Replace text with you  Access Token that you have from MapBox"
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+city+".json?access_token=" + accessToken
    axios.get(url).then(({data}) => {
        callback(undefined, {lon: data.features[0].center[0], lat: data.features[0].center[1]},data.features[0].place_name)
    }).catch((error) => {
        callback(error, undefined)
    })
}
module.exports = getloc
var axios = require('axios');
 const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=67befe04755b1b342f1a6b93642fed58";

 module.exports = {
     getTemp: function(cityname)
     {
         //debugger;
var encodedLocation = encodeURIComponent(cityname);
var requestURL =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
return axios.get(requestURL).then(
    function (res) {
    debugger;
    if(res.data.cod && res.data.message)
    {
        throw new Error(res.data.message);
    }
    else
    {
      return  res.data;
    }
},
function (res)
{
    throw new Error(res.data.message)
}
);
     }
 }
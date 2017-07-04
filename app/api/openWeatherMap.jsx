var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=ebcab6876e39c1a35d266040d6c531dd';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);

    return axios.get(requestUrl)
          .then(function(res){
            debugger;
            if(res.data.cod && res.data.message) {
              console.log('throwing error');
              throw new Error(res.data.message);
            } else {
              return res.data.main.temp;
            }
          },
          function(res){
            debugger;
            console.log('throwing error');
            throw new Error(res.response.data.message);
          });
  }
}

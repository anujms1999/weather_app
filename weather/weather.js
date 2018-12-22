const request = require('request');

var weatherResults = (api,results,callback) => {
  request({
    url: `https://api.forecast.io/forecast/${api}/${results.latitude},${results.longitude}`,
    json: true,
  },(error,response,body) => {
    if(error){
      callback('Unable to connect to forecast servers');
    }
    else if( response.statusCode === 400){
      callback('Bad request');
    }
    else if( !error && response.statusCode === 200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    }

  });
};

module.exports = {
  weatherResults,
}

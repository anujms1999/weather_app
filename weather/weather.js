const request = require('request');

var weatherTemp = (api,results,callback) => {
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
      callback(undefined,body.currently.temperature);
    }

  });
};

module.exports = {
  weatherTemp,
}

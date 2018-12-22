const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const api = '9ba3ab27735877b05426ddf1ecfea24f';
const argv  =yargs
    .options({
      a: {
        demand: true,
        alias : 'address',
        describe: 'Address to fetch weather for',
        string: true

      }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(results.address);
    weather.weatherResults(api,results,(errorMessage,weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else {
        console.log(`It's currently ${weatherResults.temperature}.
         It's feel like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
// var results = {
//   address: 'jhakj',
//   latitude: 39.9396284,
//   longitude: -75.186639999999
// }



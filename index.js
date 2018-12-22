const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address);


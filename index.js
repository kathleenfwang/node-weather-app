
let request = require('request');

let apiKey = '2d2debe859cbbfb294cc15d34640ca06';
const argv = require('yargs').argv;
let city = argv.c || 'fremont';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
	let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
console.log(message);
  }

});


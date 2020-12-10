const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

exports.weatherControllerChico = (req, res) => {

  const query = "Chico";
  const apiKey = "ec56a4f85f4d58f06fce8cbb402d3d09";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey+""

  https.get(url, function(response) {

    response.on("data", function(data) {

      console.log(data);
      const weatherData = JSON.parse(data);
      const current_weather = weatherData.weather[0].main;
      const description = weatherData.weather[0].description;
      const temperature = weatherData.main.temp;
      const feels_like = weatherData.main.feels_like;
      const icon = weatherData.weather[0].icon;
      const iconFormatted = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.json(
          
            {
                current: current_weather,
                desc: description,
                temp: temperature,
                feels: feels_like, 
                imgIcon: iconFormatted
            }
        )

    })
  })
}
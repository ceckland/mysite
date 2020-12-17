const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

exports.skiController = (req, res) => {

  const appKey = process.env.SKI_APPKEY;
  const appId = process.env.SKI_APPID;
  const url = "https://api.weatherunlocked.com/api/resortforecast/333019?hourly_interval=12&app_id=" + appId + "&app_key=" + appKey + ""; 
   
  https.get(url, function(res) {

    res.on("data", function(data) {

      const skiData = JSON.parse(data);
      const forecast_lower = skiData.forecast[0].base.wx_desc;
      const base_temp = skiData.forecast[0].base.temp_f;
      const base_fresh = skiData.forecast[0].base.freshsnow_in;
      const forecast_upper = skiData.forecast[0].upper.wx_desc;
      const upper_temp = skiData.forecast[0].upper.temp_f;
      const upper_fresh = skiData.forecast[0].upper.freshsnow_in;

      res.json(
            {
              forecast_lower: forecast_lower,
              base_temp: base_temp,
              base_fresh: base_fresh,
              forecast_upper: forecast_upper, 
              upper_temp: upper_temp,
              upper_fresh: upper_fresh
            }
        )
    })
  })
}
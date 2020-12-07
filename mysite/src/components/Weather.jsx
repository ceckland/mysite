import React, { useState, useEffect }  from "react";
const axios = require('axios').default;

var imgIcon = "";

function Weather() {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?zip=95926,us&units=imperial&appid=ec56a4f85f4d58f06fce8cbb402d3d09"
        ); 
      const data = await response.data;
      setData(data);
      imgIcon = data.weather[0].icon;
      setLoading(false);
    };
      fetchData();
  }, []);
  

 return (
    <div className="col-4">
      <div className="weather-title"><h5>Chico Weather</h5></div>
      <div>
        { 
          loading ? <div> Loading.... </div>
           : 
           <div>
             <div className="weather-data">
              <em>
                <p>Current Weather: {data.weather[0].main}.</p>
                <p>Description: {data.weather[0].description}.</p> 
                <p>Temperature: {data.main.temp}</p>  
                <p>Feels Like Temp: {data.main.feels_like}</p> 
                <p><img src={"http://openweathermap.org/img/wn/" + imgIcon + ".png"} alt="Weather Icon"></img></p>       
              </em>
            </div>
           </div>
           }
      </div>
    </div>
  );
};

export default Weather

// useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "http://api.openweathermap.org/data/2.5/weather?zip=95926,us&units=imperial&appid=ec56a4f85f4d58f06fce8cbb402d3d09"
//         ); 
//       const data = await response.json();
//       setData(data);
//       imgIcon = data.weather[0].icon;
//       setLoading(false);
//     };
//       fetchData();
//   }, []);
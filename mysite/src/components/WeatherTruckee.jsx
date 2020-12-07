import React, { useState, useEffect }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  },
  button: {
    margin: '15px 0px 15px 0px;'
  },
});

function WeatherTruckee() {
 
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("Truckee");
  const [city, setCity] = useState("Truckee");
  const [data, setData] = useState(
    
    {
        current: "",
        desc: "",
        temp: "",
        feels: "",
        imgIcon:""
    });
  
  useEffect(() => {
      const fetchData = async () => {
      await axios.get("http://localhost:3001/weather_truckee/", {
           params: {
           city: city 
           }
         }).then((result) => {
           setData(result.data); 
           setLoading(false);
         }, (error) => {
           console.log(error);
         });
    };
 
    fetchData();
  
  }, [city]);    

  function handleChange(event) {
      const value = event.target.value;
      setInput(value);
  }

  function handleClick(event) {
        event.preventDefault();
        setCity(input);
             
  }

 return (
    
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>Weather In?</Typography>
        
        <div>
        
        <form>
              <div>
                <TextField onChange={handleChange} name="city" value={input} variant="outlined"></TextField>
              </div>              
                <Button className={classes.button} variant="contained" onClick={handleClick}>SELECT CITY</Button>
              </form>        
        </div>

      <div>
        { 
          loading ? <Typography> Loading.... </Typography>
           : 
           <div>
             <div>
              
                <Typography variant="body1" align="left" gutterBottom>Current Weather: {data.current}.</Typography>
                <Typography variant="body1" align="left" gutterBottom>Description: {data.desc}.</Typography> 
                <Typography variant="body1" align="left" gutterBottom>Temperature: {data.temp}</Typography>  
                <Typography variant="body1" align="left" gutterBottom>Feels Like Temp: {data.feels}</Typography> 
                <Typography variant="body1" align="left" gutterBottom><img src={data.imgIcon} alt="Weather Icon"></img></Typography>       
              
            </div>
           </div>
           }
      </div>
      </CardContent>
    </Card>
  </Grid>
    
  );
}

export default WeatherTruckee
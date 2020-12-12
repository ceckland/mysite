import React, { useState, useEffect }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import axios from "axios";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[500],
  },
  title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  },
  button: {
    background: 'linear-gradient(195deg, #00FF7F 30%, #00008B 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    margin: '15px 0px 15px 0px;',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
      await axios.get('/api/weather_truckee/', {
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
        <CardHeader
          avatar={
            <Avatar aria-label="ski" className={classes.avatar}>
              W
            </Avatar>
            }
            titleTypographyProps={{variant:'h6'}}
            title="Weather In ???"
          />
        
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
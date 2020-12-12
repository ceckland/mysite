import React, { useState, useEffect }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: green[500],
  },
  title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  }
});

function WeatherChico() {

  const classes = useStyles();
  const [data, setData] = useState(
    {
        current: "",
        desc: "",
        temp: "",
        feels: "",
        imgIcon:""
    });
  
    const [loading, setLoading] = useState(true);

      useEffect(() => {
      fetch('/api/weather_chico').then(res => {
        if (res.ok){
              setLoading(false);
              return res.json();            
        } 
      }).then(jsonRes => setData(jsonRes))
      }, []);
  

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
            title="Chico Weather"
          />
      <div>
        { 
          loading ? <Typography> Loading.... </Typography>
           : 
           <div>
                <div>
                  
                    <Typography variant="body1" align="left" gutterBottom>Current Weather: {data.current}.</Typography>
                    <Typography variant="body1" align="left" gutterBottom>Description: {data.desc}.</Typography>
                    <Typography variant="body1" align="left" gutterBottom>Temperature: {data.temp}.</Typography>
                    <Typography variant="body1" align="left" gutterBottom>Feels Like: {data.feels}.</Typography>
                    <Typography variant="body1" align="left" gutterBottom><img src={data.imgIcon} alt="Weather Icon"></img></Typography>
                                     
                </div>
           </div>
           }
      </div>
      </CardContent>
      </Card>
      </Grid>
    
  );
};

export default WeatherChico
import React, { useState, useEffect }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import axios from 'axios';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  }
});

function SkiData() {
 
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [data, setData] = useState(
      
    {
        forecast_lower: "",
        base_temp: "",
        base_fresh: "",
        forecast_upper: "", 
        upper_temp: "",
        upper_fresh: ""
    });
 
  useEffect(() => {
    axios.get('/api/ski/')
     .then((result) => {
        setData(result.data); 
        setLoading(false);
        }, (error) => {
           console.log(error);
        });
  }, []);  

  return (
    
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
      <Card className={classes.card}>
        <CardContent>
        <CardHeader
            avatar={
              <Avatar aria-label="ski" className={classes.avatar}>
                S
              </Avatar>
              }
            titleTypographyProps={{variant:'h6'}}
            title="Val D'Isere Ski Forecast"
          />
            <div>
              { 
                loading ? <Typography> Loading.... </Typography>
                : 
                <div>
                      <div>
                        <Typography variant="body1" align="left" gutterBottom>Base Conditions: {data.forecast_lower}.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Base Temp: {data.base_temp} degrees.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Base Fresh Snow: {data.base_fresh} inches.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Conditions: {data.forecast_upper}.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Temp: {data.upper_temp} degrees.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Fresh Snow: {data.upper_fresh} inches.</Typography>
                      </div>
                </div>
              }
            </div>
        </CardContent>
      </Card>
    </Grid>
  
  );
};

export default SkiData
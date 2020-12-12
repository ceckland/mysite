import React, { useState, useEffect }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

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

function Data() {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.weatherunlocked.com/api/resortforecast/333019?hourly_interval=12&app_id=634c2691&app_key=e3f601305c5bb64312e4e5dc8ac0baef"
        ); 
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
      fetchData();
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
                        <Typography variant="body1" align="left" gutterBottom>Base Conditions: {data.forecast[0].base.wx_desc}.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Base Temp: {data.forecast[0].base.temp_f} degrees.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Base Fresh Snow: {data.forecast[0].base.freshsnow_in} inches.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Conditions: {data.forecast[0].upper.wx_desc}.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Temp: {data.forecast[0].upper.temp_f} degrees.</Typography>
                        <Typography variant="body1" align="left" gutterBottom>Top Fresh Snow: {data.forecast[0].upper.freshsnow_in} inches.</Typography>
                      </div>
                </div>
              }
            </div>
        </CardContent>
      </Card>
    </Grid>
  
  );
};

export default Data


// api.weatherunlocked.com/api/resortforecast/333019?app_id=634c2691&app_key=e3f601305c5bb64312e4e5dc8ac0baef

// http://www.weatherunlocked.com/Images/icons/2/Sunny.png

// <Typography className={classes.title} gutterBottom>Val D'Isere Ski Forecast</Typography>

 
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SkiData from './SkiData';
import Weather from "./Weather";
import Picture from "./Picture";
import Lotto from "./Lotto";
import Users from "./Users";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  body: {
    margin: '15px 0px 15px 0px;'
  },
});

const Home = () => {
    
    const classes = useStyles();

    return (
        
        <React.Fragment>
        
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h4">
                    Home
                </Typography>
            </Grid>
            
            <Grid item xs={12}>
                <Typography className={classes.body} variant="body1">
                    Welcome to my website!!  This is primarily a place for me to play around 
                    with coding while I learn various technologies and techniques.  Right now 
                    it is a MERN app utilizing Material UI for styling that is deployed to Heroku.   
                    Apologies for any bugs or issues that are on the site.  Enjoy! 
                </Typography>
            </Grid>
        
        </Grid>

        <Grid container alignItems="stretch" spacing={2}>    
                
                <SkiData />
                <Weather
                 city="Chico" 
                 fields={false}
                 title="Chico Weather"
                />
                <Picture />
                <Weather 
                  city="Truckee"
                  fields={true}
                  title="Weather In ???"
                />
                <Lotto />
                <Users />

        </Grid>  

        </React.Fragment>
        
    );  
} 

export default Home
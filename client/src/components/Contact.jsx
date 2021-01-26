import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  body: {
    margin: '15px 0px 15px 0px;'
  },
});

const Contact = () => {
    
    const classes = useStyles();

    return (
        
        <Grid item xs={12}>
            <Typography className={classes.title} variant="h4">Contact</Typography>
            <Typography className={classes.body} variant="body1">Contact</Typography>
        </Grid>
    )  
} 

export default Contact
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import image from './../images/subaru-wrx-03.jpg';

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  body: {
    margin: '15px 0px 15px 0px;'
  },
});

const About = () => {

    const classes = useStyles();

    return (
        
        <Grid item xs={12}>
            <Typography className={classes.title} variant="h4">About</Typography>
            <Typography className={classes.body} variant="body1">One cool Subaru!!</Typography>
            <Card>
              <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Subaru WRX"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Subaru WRX
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    One cool car........
                  </Typography>
                </CardContent>
                </CardActionArea>
              <CardActions>
              <Button size="small" color="primary" href="https://www.subaru.com/">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
    );  
} 

export default About


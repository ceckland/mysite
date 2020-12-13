import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import img1 from './../images/bandon_13.jpg'; 
import img2 from './../images/bandon_13_2.jpg';
import img3 from './../images/bandon_10.jpg';
import img4 from './../images/bandon_10_2.jpg';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: purple[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
    title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  }
});

var clicks = 0;
var golfImage = img1;

const Picture = () => {
    
    const classes = useStyles();
    const [image, setImage] = useState(img1);

    function handleClick(event) {
        event.preventDefault();
        clicks++;
          if (clicks === 1) {
            golfImage = img2;
          } 
          if (clicks === 2) {
            golfImage = img3;
          } 
          if (clicks === 3) {
            golfImage = img4;
          } 
          if (clicks === 4) {
            golfImage = img1;
            clicks=0;
          } 
        setImage(golfImage);
      }
    
    return (
        
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Card className={classes.card}>       
                  <CardHeader
                     avatar={
                     <Avatar aria-label="golf" className={classes.avatar}>
                     B
                     </Avatar>
                     }
                     titleTypographyProps={{variant:'h6'}}
                     title="Bandon Dunes"
                     subheader="September, 2020"
                  />
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Bandon Dunes"
                    onClick={handleClick}
                  />       
                  <CardContent>
                     <Typography variant="body2">
                        Bandon Dunes is one of the greatest golf resorts in the world.
                        I had the pleasure of visiting in September, 2020. 
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://www.bandondunesgolf.com/">
                    Learn More
                  </Button>
                </CardActions>
            </Card>
        </Grid>
    )  
} 

export default Picture
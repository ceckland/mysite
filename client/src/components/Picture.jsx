import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: purple[500],
  },
    title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  card: {
    height: '100%'
  }
});

const Picture = () => {

    const classes = useStyles();
    
    return (
        
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
            <Card className={classes.card}>
                  <CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="ski" className={classes.avatar}>
                        D
                        </Avatar>
                        }
                        titleTypographyProps={{variant:'h6'}}
                        title="Media Card"
                    />
                    <Typography variant="h5" gutterBottom>
                        blurbiful
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        adjective
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        full of blurbishness.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )  
} 

export default Picture
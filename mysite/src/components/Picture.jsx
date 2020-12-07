import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
                    <Typography className={classes.title} gutterBottom>
                        Word of the Day
                    </Typography>
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
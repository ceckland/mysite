import React from 'react';
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

const Lotto = () => {

    const classes = useStyles();
    const mainNumbers = [];
    var megaNumber = 0;
    var randomNumber = 0;

    for (var i = 0; i < 5; i++) {
      randomNumber = (Math.floor(Math.random() * 46)) + 1;
      mainNumbers.push(randomNumber);
    }
    
    megaNumber = Math.floor(Math.random() * 27);
    
  return (
  
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>SuperLotto Numbers</Typography>
                <Typography>Main Numbers:   
                    <ul> {mainNumbers.map((number) => (
                            <li key={mainNumbers.toString()}>{number}</li>
                        ))}
                    </ul>         
                </Typography>
                <Typography>Mega Number:<ul><li>{megaNumber}</li></ul></Typography>  
           </CardContent>
        </Card> 
    </Grid>    

    );  
} 

export default Lotto
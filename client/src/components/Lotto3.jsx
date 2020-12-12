import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    textDecoration: 'underline',
  },
  mega: {
    margin: '15px 0px 15px 0px;',
  },
  card: {
    height: '100%'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    margin: '15px 0px 15px 0px;',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

function Lotto3() {

    const [mainNumbers, setMainNumbers] = useState([]);
    const [megaNumber, setMegaNumber] = useState([]);
    const classes = useStyles(); 
    const [count, setCount] = useState(0);
    const rando = useRef(0);
    let clickCount = 0;
    const mainNums = [];
    const megaNum = [];

    const getNumbers = () => {
            for (var i = 0; i < 5; i++) {
            rando.current = (Math.floor(Math.random() * 46)) + 1;
            mainNums.push(rando.current);
            }
        
        megaNum.push(Math.floor(Math.random() * 26) + 1);
        
    };

    useEffect(() => {

        getNumbers();
        setMainNumbers(mainNums);
        setMegaNumber(megaNum);

  }, [count]);


    function handleClick(event) {
      event.preventDefault();  
      clickCount++;  
      setCount(clickCount);    
      
    }

  return (
  
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>SuperLotto Numbers</Typography>
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[0]}</Typography>
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[1]}</Typography> 
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[2]}</Typography>  
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[3]}</Typography> 
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[4]}</Typography>
                <Typography className={classes.mega} variant="body1" align="left" gutterBottom>Mega Number:   {megaNumber[0]}</Typography>
                <Button className={classes.button} variant="contained" onClick={handleClick}>GENERATE NEW NUMBERS</Button>
           </CardContent>
        </Card> 
    </Grid>    

    );  
} 

export default Lotto3
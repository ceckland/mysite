import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from "@material-ui/core";
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: orange[500],
  },
  title: {
    fontSize: 18,
    textDecoration: 'underline',
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

function Lotto() {

    const classes = useStyles();
    let randomNumber = 0;
    const mainNums = [];
    const megaNum = [];
    
    const [mainNumbers, setMainNumbers] = useState(() => {
      const initialNumbers = getMainNumbers();
      return initialNumbers;
      });

    const [megaNumber, setMegaNumber] = useState(() => {
      const initialNumber = getMegaNumber();
      return initialNumber;
      });

    function getMainNumbers() {
      var mains = [];
      
      for (var i = 0; i < 5; i++) {
        randomNumber = (Math.floor(Math.random() * 46)) + 1;
        mains.push(randomNumber);
       }
        return mains;
    }

    function getMegaNumber() {
      var mega = [];   
      mega.push(Math.floor(Math.random() * 26) + 1); 
      return mega;
    }

    function getNumbers() {
      for (var i = 0; i < 5; i++) {
       randomNumber = (Math.floor(Math.random() * 46)) + 1;
       mainNums.push(randomNumber);
       }
      megaNum.push(Math.floor(Math.random() * 26) + 1);
    }
    
    function handleClick(event) {
      event.preventDefault(); 
      getNumbers();      
      setMainNumbers(mainNums);
      setMegaNumber(megaNum);
    }

  return (
  
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Card className={classes.card}>
            <CardContent>
              <CardHeader
                avatar={
                  <Avatar aria-label="ski" className={classes.avatar}>
                    L
                  </Avatar>
                }
                titleTypographyProps={{variant:'h6'}}
                title="SuperLotto Numbers"
              />
                
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[0]}</Typography>
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[1]}</Typography> 
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[2]}</Typography>  
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[3]}</Typography> 
                <Typography variant="body1" align="left" gutterBottom>{mainNumbers[4]}</Typography>
                <Typography className={classes.mega} variant="body1" align="left" gutterBottom>Mega Number:   {megaNumber[0]}</Typography>
                
                <Button className={classes.button} variant="contained" onClick={handleClick}>GENERATE NUMBERS</Button>
           </CardContent>
        </Card> 
    </Grid>    

    );  
} 

export default Lotto
import React from 'react';
import { useState, useEffect } from 'react';
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

function Users() {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch("api/users/").then(res => {
        if (res.ok){
              return res.json()
        } 
      }).then(jsonRes => setUsers(jsonRes.usersList))
    }, []);

    return (
        
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.title} gutterBottom>Hello</Typography>
              <Typography variant="body1"> {users.map(user => <li>{user}</li>)} </Typography>
              </CardContent>
          </Card>
        </Grid>
    );
}

export default Users

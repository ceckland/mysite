import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: yellow[500],
  },
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
      fetch('/api/users/').then(res => {
        if (res.ok){
              return res.json()
        } 
      }).then(jsonRes => setUsers(jsonRes.usersList))
    }, []);

    return (
        
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <Card className={classes.card}>
            <CardContent>
            <CardHeader
              avatar={
                <Avatar aria-label="ski" className={classes.avatar}>
                  U
                </Avatar>
                }
                titleTypographyProps={{variant:'h6'}}
                title="Users Fetch"
            />
              <Typography variant="body1"> {users.map((user, index) => <li key={index}>{user}</li>)} </Typography>
              </CardContent>
          </Card>
        </Grid>
    );
}

export default Users

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  body: {
    margin: '15px 0px 25px 0px;'
  },
  button: {
    margin: '0px 0px 25px 0px;'
  },
});

const Notes = () => {

    const classes = useStyles();
    const [authenticated, setAuthenticated] = useState(true);

    const [notes, setNotes] = useState([{
        title: "",
        content: ""
    }])

    useEffect(() => {
        fetch('/api/notes').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })

    function handleClick(event) {
        event.preventDefault();
    
    }

    return (
        
        <Grid item xs={12}>
            <Typography className={classes.title} variant="h4">Random Notes, Etc.</Typography>
                
                {notes.map(note => 

                    <div>
                        <Typography className={classes.title} variant="h5">{note.title}</Typography>
                        <Typography className={classes.body} variant="body1">{note.content}</Typography>
                    
                        {authenticated ? <div><button className={classes.button} onClick={handleClick}>DELETE NOTE</button></div> : null }
                    
                    </div>  
            )}   

         </Grid>
        
    )  
} 

export default Notes
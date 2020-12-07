import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  body: {
    margin: '15px 0px 15px 0px;'
  },
});

const Notes = () => {

     const classes = useStyles();

    const [notes, setNotes] = useState([{
        title: "",
        content: ""
    }])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })

    return (
        
        <Grid item xs={12}>
            <Typography className={classes.title} variant="h4">Notes</Typography>
            {notes.map(note => 
                <div>
                    <Typography className={classes.body} variant="subtitle1">{note.title}</Typography>
                    <Typography className={classes.body} variant="body1">{note.content}</Typography>
                </div>
            )}
         </Grid>
        
    )  
} 

export default Notes
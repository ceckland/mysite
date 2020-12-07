import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  title: {
    margin: '15px 0px 10px 0px;'
  },
  body: {
    margin: '15px 0px 15px 0px;'
  },
  button: {
    margin: '15px 0px 15px 0px;'
  },
  textArea: {
    margin: '15px 0px 15px 0px;'
  },
});

const CreateNote = () => {

    const classes = useStyles();

    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title:input.title,
            content:input.content
        }
        axios.post("http://localhost:3001/create", newNote)
        setInput({
        title: "",
        content: ""
        });

    }

    return (
        
        <Grid item xs={12}>
            <Typography className={classes.title} variant="h4">Create Note</Typography>
            <div>
                <form>
                    <div>
                        <div>
                            <TextField 
                                id="outlined-basic" 
                                label="Note Title" 
                                variant="outlined"
                                onChange={handleChange} 
                                value={input.title}>
                            </TextField>
                        </div>              
                    </div>
                
                    <div>
                        <div>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Note Content"
                                multiline
                                rowsMax={12}
                                className={classes.textArea} 
                                onChange={handleChange} 
                                value={input.content} 
                                variant="outlined">
                            </TextField>
                        </div>
                    </div>
                    <Button className={classes.button} variant="contained" onClick={handleClick}>ADD NOTE</Button>
                </form>         
            </div>
            </Grid>
        
    );  
} 

export default CreateNote


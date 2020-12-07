import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  tool: {
    justifyContent: 'space-around'
  },
  link: {
    fontSize: 18,
    textDecoration: 'none',
    color: 'white',
    }
});

const NavBar = () => {
    
    const classes = useStyles();

    return(
        
        <AppBar position="static">
            <Toolbar className={classes.tool}>
                <Typography gutterBottom>
                    <Link component={RouterLink} to="/" className={classes.link}>Home</Link>
                </Typography>
                <Typography gutterBottom>
                    <Link component={RouterLink} to="/about" className={classes.link}>About</Link>
                </Typography>
                <Typography gutterBottom>
                    <Link component={RouterLink} to="/contact" className={classes.link}>Contact</Link> 
                </Typography>
                <Typography gutterBottom>
                    <Link component={RouterLink} to="/notes" className={classes.link}>Notes</Link> 
                </Typography>
                <Typography gutterBottom>
                    <Link component={RouterLink} to="/create_note" className={classes.link}>Create Note</Link> 
                </Typography>
            </Toolbar>
    </AppBar>
    )
}
export default NavBar;
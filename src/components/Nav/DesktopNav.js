import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  navSide: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  activeLink: {
    textDecoration: 'underline',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    padding: '1rem',
    '&:hover': {
      color: 'orange',
      textDecoration: 'underline'
    }
  }, 
  container: {
    listStyleType: 'none',  
    paddingLeft: 0  
  },
  signIn: {
    background: 'lightpink',
    margin: '.5rem',
    borderRadius: '5px'
  },
  signUp: {
    background: 'lightgreen',
    margin: '.5rem',
    borderRadius: '5px'
  }
})

const DesktopNav = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <nav>
        <Grid container justify="space-between" alignItems="center" component="ul" className={classes.container}>
          <Grid item xs={8} md={6} className={classes.navSide} component="li">
            <Grid container component="ul" className={classes.container}>
              <Grid item component="li"><NavLink to="/" activeClassName={classes.activeLink} className={classes.link}>W/L log</NavLink></Grid>
              <Grid item component="li"><NavLink to="/track" activeClassName={classes.activeLink} className={classes.link}>Why track W/L's?</NavLink></Grid>
              <Grid item component="li"><NavLink to="/activity" activeClassName={classes.activeLink} className={classes.link}>Activity</NavLink></Grid>
              <Grid item component="li"><NavLink to="/community" activeClassName={classes.activeLink} className={classes.link}>Community</NavLink></Grid>
            </Grid> 
          </Grid>
          <Grid item xs={4} md={4} className={classes.navSide} component="li">
            <Grid container justify="flex-end" component="ul" className={classes.container}>
              <Grid item component="li"><NavLink to="/sign-in" activeClassName={classes.activeLink} className={`${classes.link} ${classes.signIn}`}>Sign In</NavLink></Grid>
              <Grid item component="li"><NavLink to="/sign-up" activeClassName={classes.activeLink} className={`${classes.link} ${classes.signUp}`}>Sign Up</NavLink></Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </CssBaseline> 
  );
};

export default DesktopNav;
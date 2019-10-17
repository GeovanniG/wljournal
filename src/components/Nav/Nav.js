import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Nav.module.css';

const useStyles = makeStyles({
  navSide: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  activeLink: {
    textDecoration: 'underline',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: 'black',
    padding: '2rem 1rem',
    '&:hover': {
      color: 'orange',
      textDecoration: 'underline'
    }
  }
})

const Nav = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <nav>
        <Grid container justify="space-between">
          <Grid item xs={8} md={6} className={classes.navSide}>
            <NavLink to="/" activeClassName={classes.activeLink} className={classes.link}>W/L log</NavLink>
            <NavLink to="/track" activeClassName={classes.activeLink} className={classes.link}>Why track W/L's?</NavLink>
            <NavLink to="/activity" activeClassName={classes.activeLink} className={classes.link}>Activity</NavLink>
            <NavLink to="/community" activeClassName={classes.activeLink} className={classes.link}>Community</NavLink>
          </Grid>
          <Grid item xs={4} md={2} className={classes.navSide}>
            <NavLink to="/sign-in" activeClassName={classes.activeLink} className={classes.link}>Sign In</NavLink>
            <NavLink to="/sign-up" activeClassName={classes.activeLink} className={classes.link}>Sign Up</NavLink>
          </Grid>
        </Grid>
      </nav>
    </CssBaseline> 
  );
};

export default Nav;
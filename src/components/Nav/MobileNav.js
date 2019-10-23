import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  },
  activeLink: {
    textDecoration: 'underline',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    padding: '1rem 1rem',
    '&:hover': {
      color: 'orange',
      textDecoration: 'underline'
    }
  },
  icon: {
    margin: '1.25rem 1rem'
  },
  dropdown: {
    display: 'none'
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

const MobileNav = () => {
  const classes = useStyles();
  const [dropdown, setDropdown] = useState(true);


  return (
    <CssBaseline>
      <Grid container justify="space-between" alignItems="center" component="nav" className={classes.container}>
        <Grid item xs={3}><NavLink to="/" activeClassName={classes.activeLink} className={classes.link}>W/L log</NavLink></Grid>
        <Grid item xs={2} onClick={() => setDropdown(!dropdown)}><FaBars size={21} className={classes.icon} /></Grid>
      </Grid>
      <Grid container justify="center" className={`${classes.container} ${dropdown ? classes.dropdown : ''}`}>
        <Grid item xs={12}><NavLink to="/track" activeClassName={classes.activeLink} className={classes.link}>Why track W/L's?</NavLink></Grid>
        <Grid item xs={12}><NavLink to="/activity" activeClassName={classes.activeLink} className={classes.link}>Activity</NavLink></Grid>
        <Grid item xs={12}><NavLink to="/activity" activeClassName={classes.activeLink} className={classes.link}>Activity</NavLink></Grid>
        <Grid item xs={12}><NavLink to="/community" activeClassName={classes.activeLink} className={classes.link}>Community</NavLink></Grid>
        <Grid item xs={12}>
          <Grid container justify="space-evenly">
            <Grid item xs={6}><NavLink to="/sign-in" activeClassName={classes.activeLink} className={`${classes.link} ${classes.signIn}`}>Sign In</NavLink></Grid>
            <Grid item xs={6}><NavLink to="/sign-up" activeClassName={classes.activeLink} className={`${classes.link} ${classes.signUp}`}>Sign Up</NavLink></Grid>
          </Grid>
        </Grid>
      </Grid>
    </CssBaseline>
  )
}

export default MobileNav;
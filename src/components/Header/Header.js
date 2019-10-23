import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import img from './street-header.jpg';

const useStyles = makeStyles({
  header: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 100%',
    backgroundSize: 'cover'
  },
  link: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
    // margin: '1rem',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: '5px',
    // background: 'black',
    '&:hover': {
      // color: 'orange',
      textDecoration: 'underline'
    }
  },
  linkSignUp: {
    background: 'lightpink'
  },
  linkSignIn: {
    background: 'lightgreen'
  },
  google: {
    background: 'green',
    '&:hover': {
      background: 'yellow',
      color: 'black'
    }
  },
  facebook: {
    background: 'blue',
    '&:hover': {
      background: 'yellow',
      color: 'black'
    }
  },
  twitter: {
    background: 'lightblue',
    '&:hover': {
      background: 'yellow',
      color: 'black'
    }
  },
  container: {
    width: '100%',
    margin: 0
  },
  text: {
    margin: '.5rem .5rem 0 .5rem',
    background: 'grey',
    color: 'white',
    fontSize: '1rem'
  },
  heading: {
    marginTop: '2.5rem',
    marginBottom: '.5rem',
    color: 'white',
    textAlign: 'center',
    fontSize: '2.3rem'
    // background: 'lightblue',
  },
  headingText: {
    // background: 'lightgrey',
    color: 'white',
    textAlign: 'center',
    fontSize: '1.4rem',
    marginTop: '.25rem',
    marginBottom: '2rem'
  }
})

const Header = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <header className={classes.header}>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={10}>
            <h1 className={classes.heading}>
              The Road to Success Is Plagued with Failures
            </h1>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={10}>
            <p className={classes.headingText}>
               Track your failures, making sure to never repeat them again
            </p>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2} className={classes.container}>
          <Grid item xs={5} sm={3} md={2}>
            <Link to="/sign-in" className={`${classes.link} ${classes.linkSignIn}`}>
              Sign In
            </Link>
          </Grid>
          <Grid item xs={5} sm={3} md={2}>
            <Link to="/sign-up" className={`${classes.link} ${classes.linkSignUp}`}>
              Sign Up
            </Link>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={10} sm={6} md={4}>
            <p className={classes.text}>
              Login With:
            </p>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2} className={classes.container}>
          <Grid item xs={3} sm={2} md={1}>
            <Link to="/" className={`${classes.link} ${classes.google}`}>
              <FaGoogle />
            </Link>
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <Link to="/" className={`${classes.link} ${classes.facebook}`}>
              <FaFacebookF />
            </Link>
          </Grid>
          <Grid item xs={3} sm={2} md={1}>  
            <Link to="/" className={`${classes.link} ${classes.twitter}`}>
              <FaTwitter />
            </Link>
          </Grid>
        </Grid>
      </header>
    </CssBaseline>
  )
}

export default Header;
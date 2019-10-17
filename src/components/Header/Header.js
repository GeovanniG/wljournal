import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import img from './street-header.jpg';

const useStyles = makeStyles({
  headerBg: {
    height: '75vh',
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 100%',
    backgroundSize: 'cover'
  }
})


const Header = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <header className={classes.headerBg}>
        {/* <img src={img} alt="" /> */}
      </header>
    </CssBaseline>
  )
}

export default Header;
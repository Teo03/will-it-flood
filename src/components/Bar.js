import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#1D8A99'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/">Will it Flood?</Link>
          </Typography>
          <Link to="/about" style={{marginRight: 20}}>About</Link>
          <Link to="/causes" style={{marginRight: 20}}>Causes</Link>
          <Link to="/effects">Effects</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
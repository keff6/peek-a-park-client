import React from 'react';
import { withStyles } from '@material-ui/core';
import Provider from './Config/Provider';
import Routes from './Config/Routes';
import styles from './App.styles';

function App() {
  return (
      <Provider>
        <Routes />
      </Provider>
  );
}

export default withStyles(styles)(App);

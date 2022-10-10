import React from 'react';
import { withStyles } from '@material-ui/core';
import USAMap from 'react-usa-map';
import styles from './Map.styles'

const Map = ({classes}) => {
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  return (
    <div className={classes.root}>
      <USAMap 
        onClick={mapHandler}
        defaultFill='rgb(255,255,255,0.4)'
      />
    </div>
  )
}

export default withStyles(styles)(Map)
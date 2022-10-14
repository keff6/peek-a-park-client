import React from 'react';
import { withStyles } from '@material-ui/core';
import USAMap from 'react-usa-map';
import styles from './Map.styles'

const Map = ({
  classes,
  selectedState = '',
  setSelectedState = () => null
}) => {
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
    setSelectedState(event.target.dataset.name)
  };

  const statesCustomConfig = () => {
    if(!selectedState) return null

    return {
      [selectedState]: {
        fill: "#fb8319",
      }
    };
  };

  return (
    <div className={classes.root}>
      <USAMap 
        onClick={mapHandler}
        defaultFill='rgb(255,255,255,0.4)'
        customize={statesCustomConfig()}
      />
    </div>
  )
}

export default withStyles(styles)(Map)
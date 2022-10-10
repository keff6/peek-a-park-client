import React from 'react';
import { withStyles } from '@material-ui/core';
import Map from '../Map/Map';
import styles from './StateSelection.styles'

const StateSelection = ({classes}) => {
  return (
    <div className={classes.root}>
      <section className={classes.titleSection}>
        <h1 className={classes.title}>Select State</h1>
      </section>
      
      <div className={classes.mapContainer}>
        <Map />
      </div>
    </div>
  )
}

export default withStyles(styles)(StateSelection)
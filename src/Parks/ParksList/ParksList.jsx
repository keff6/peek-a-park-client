import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './ParksList.styles'

const ParksList = ({classes}) => {
  return (
    <div className={classes.root}>
      <h1>Parks List</h1>
    </div>
  )
}

export default withStyles(styles)(ParksList)
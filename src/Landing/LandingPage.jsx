import React from 'react';
import { withStyles, Paper, Button } from '@material-ui/core';
import styles from './LandingPage.styles'

const Landing = ({classes}) => (
  <Paper className={classes.landing}>
    <section className={classes.titleContainer}>
      <div className={classes.title}>Peek a Park</div>
      <div className="mainOptions">
        <Button variant="outlined" className={classes.button}>Select a State</Button>
        <Button variant="outlined" className={classes.button}>Go to Random Park</Button>
      </div>
    </section>
  </Paper>
)

export default withStyles(styles)(Landing)
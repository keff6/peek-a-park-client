import React from 'react';
import { useNavigate } from "react-router-dom";
import { withStyles, Paper, Button } from '@material-ui/core';
import styles from './LandingPage.styles'

const Landing = ({classes}) => {
  let navigate = useNavigate();

  const navigateToMap = () => {
    let path = '/map';
    navigate(path);
  };

  return (
    <Paper className={classes.landing}>
      <section className={classes.titleContainer}>
        <div className={classes.title}>Peek a Park</div>
        <div className="mainOptions">
          <Button
            variant="outlined"
            className={classes.button}
            onClick={navigateToMap}
          >Select a State</Button>
          <Button variant="outlined" className={classes.button}>Go to Random Park</Button>
        </div>
      </section>
    </Paper>
  )
}

export default withStyles(styles)(Landing)
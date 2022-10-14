import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { withStyles, Button } from '@material-ui/core';
import Map from '../Map/Map';
import {AppContext} from '../Config/Provider';
import {STATE} from '../Utils/constants';
import styles from './StateSelection.styles';

const StateSelection = ({classes}) => {
  const [state, setState] = useContext(AppContext);
  let navigate = useNavigate();

  const navigateToParks = () => {
    let path = '/parks';
    navigate(path);
  };

  const setSelectedState = (state) => setState(currentState => ({ ...currentState, selectedState: state || ''}))

  console.warn(state)
  return (
    <div className={classes.root}>
      <section className={classes.titleSection}>
        <h1 className={classes.title}>Select State</h1>
        <div className={classes.subTitle}>
          <h2 className={classes.stateName}>{state.selectedState ? STATE[state.selectedState] : '- -'}</h2>
          <Button
            onClick={navigateToParks}
            className={classes.button}
          >
            Go!
          </Button>
        </div>
      </section>
      
      <div className={classes.mapContainer}>
        <Map
          setSelectedState={setSelectedState}
          selectedState={state.selectedState}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(StateSelection)
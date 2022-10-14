import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Landing from '../Landing/LandingPage';
import ParksList from '../Parks/ParksList/ParksList';
import StateSelection from '../StateSelection/StateSelection';

const Routes = () => {
const routes = (
  <Switch>
    <Route exact path="/parks" element={<ParksList />}/>
    <Route exact path="/map" element={<StateSelection />}/>
    <Route exact path="/" element={<Landing />}/>
  </Switch>
);
return routes
}

export default Routes;
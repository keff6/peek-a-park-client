import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Landing from '../Landing/LandingPage';
import StateSelection from '../StateSelection/StateSelection';

const Routes = () => {
const routes = (
  <Switch>
    <Route exact path="/map" element={<StateSelection />}/>
    <Route exact path="/" element={<Landing />}/>
  </Switch>
);
return routes
}

export default Routes;
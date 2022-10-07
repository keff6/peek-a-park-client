import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Landing from '../Landing/LandingPage';

const Routes = () => {
const routes = (
  <Switch>
    <Route exact path="/" element={<Landing />}/>
  </Switch>
);
return routes
}

export default Routes;
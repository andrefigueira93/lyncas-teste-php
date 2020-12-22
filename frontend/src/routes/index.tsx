import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MeusFavoritos from '../pages/MeusFavoritos';
import Inicio from '../pages/Inicio';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicio} />
    <Route path="/meus-favoritos" component={MeusFavoritos} />
  </Switch>
);

export default Routes;
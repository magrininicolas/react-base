import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Err from '../pages/404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Err} />
    </Switch>
  );
}

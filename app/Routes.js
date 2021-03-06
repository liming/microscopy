import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AnalysePage from './containers/AnalysePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.ANALYSE} component={AnalysePage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);

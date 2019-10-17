import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../components/App/App';

const AppRouter = () => {
  return (
    <Router basename="/">
      <Switch>
          <Route component={App} path="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
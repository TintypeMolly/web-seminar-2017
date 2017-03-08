import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Index from './pages/Index';
import About from './pages/About';
import NotFound from './pages/NotFound';

const AppRoute = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Index}/>
      <Route path='about' component={About}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default AppRoute;

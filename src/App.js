import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import createHistory from 'history/createBrowserHistory';

import Loading from './components/Loading';

const Home = new Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const About = new Loadable({
  loader: () => import('./containers/About'),
  loading: Loading,
});

const Profile = new Loadable({
  loader: () => import('./containers/Profile'),
  loading: Loading,
});

const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <div>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
        &nbsp;|&nbsp;
        <Link to="/profile">Profile</Link>
        &nbsp;|&nbsp;
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);

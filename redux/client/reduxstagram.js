import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Rout = () => (
  <Provider store={store}>
    <Router>
    <div>
      <h1>
        <NavLink to="/">ReduxInstagram</NavLink>
      </h1>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/view/:id" component={Single} />
      </Switch>
      </div>
    </Router>
  </Provider>
);

render(<Rout/>, document.getElementById('root'))
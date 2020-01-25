import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store';
import { createBrowserHistory } from 'history';

import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import App from './components/App';

export const history = createBrowserHistory();

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>

), document.getElementById('root'));

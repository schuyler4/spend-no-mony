import React from 'react';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import AuthView from './components/AuthView'
import Profile from './components/Profile'
import app from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(app)

render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='auth' component={AuthView}></Route>
          <Route path='profile' component={Profile}></Route>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root')
);

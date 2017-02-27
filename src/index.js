import React from 'react';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import AuthView from './components/AuthView'
import Profile from './components/Profile'
import NewItemView from './components/NewItemView'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='auth' component={AuthView}></Route>
        <Route path='profile' autherize={['user']} component={Profile}></Route>
        <Route path='new' autherize={['user']} component={NewItemView}></Route>
      </Route>
     </Router>
  </MuiThemeProvider>
  ), document.getElementById('root')
);

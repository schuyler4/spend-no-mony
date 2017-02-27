import React, { Component } from 'react';
import './database';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  componentWillMount() {
    const user = firebase.auth().currentUser;
    const path = this.props.location.pathname;

    if(!user && path != '/auth') {
      browserHistory.push('/auth');
    }

    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <AppBar 
          title='Spend No Mony' 
          iconClassNameRight="muidocs-icon-navigation-expand-more" 
        />
        {this.props.children}
      </div>
    );
  }
}

export default App;

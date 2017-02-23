import React, { Component } from 'react';
import { connect }  from 'react-redux'
import * as actions from './actions'

class App extends Component {
  renderLogOutBtn() {
    console.log(this.props.auth)
    if (this.props.auth.email && this.props.auth.uid) {
      return <button>logout button</button>
    }
  }

  render() {
    return (
      <div>
        <h1>Spend No Mony</h1>
        {this.renderLogOutBtn()}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps, actions)(App);

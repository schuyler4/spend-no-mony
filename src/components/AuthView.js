import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import firebase from 'firebase'
import database from '../database'
import * as actions from '../actions'
import { connect } from 'react-redux'

class AuthView extends Component {
  signInWithPopUp() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      this.props.loginUser(result.user.email, result.credential.accessToken)
      browserHistory.push('profile')
    }.bind(this))
  }

  render() {
    return (
      <button onClick={this.signInWithPopUp.bind(this)}>
        Sign In With Google
      </button>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps, actions)(AuthView)

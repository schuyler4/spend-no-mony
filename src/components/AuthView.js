import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import firebase from 'firebase'
import '../database'

class AuthView extends Component {
  constructor() {
    super()
    this.signInWithPopUp = this.signInWithPopUp.bind(this)
  }

  signInWithPopUp() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      browserHistory.push('profile')
    })
  }

  render() {
    return (
      <button onClick={this.signInWithPopUp} className='signUpBtn'>
        Sign In With Google
      </button>
    )
  }
}

export default AuthView

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import firebase from 'firebase';

class Profile extends Component  {
  render() {
    return (
      <div>
        <Link to={'new'}>Give Something</Link>
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Profile extends Component  {
  render() {
    return (
      <Card>
        <CardHeader
          title="Your Profile"
        />
        <CardActions>
          <FlatButton
            label="Get Something"
            onClick={() => browserHistory.push('get')}
          />
          <FlatButton
            label="Give Something"
            onClick={() => browserHistory.push('new')}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Profile;

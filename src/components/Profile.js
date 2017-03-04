import React from 'react';
import { browserHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ItemStatus from './ItemStatus';

function Profile() {
  return (
    <Card>
      <CardHeader
        title="Your Profile"
      />
      <CardMedia>
        <ItemStatus />
      </CardMedia>
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

export default Profile;

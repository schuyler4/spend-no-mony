import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Profile from '../Profile';

describe('profile', () => {
    it('renders', () => {
        const wrapper = shallow(<Profile />);
        //wrapper.find()
    });
});

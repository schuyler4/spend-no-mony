import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

describe('profile', () => {
    it('renders a link to new page', () => {
        const profile = shallow(<Profile />);
        expect(profile.find('Link'))
    });
});
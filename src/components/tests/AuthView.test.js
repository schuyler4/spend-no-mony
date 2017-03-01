import React from 'react';
import AuthView from '../AuthView';
import firebase from 'firebase'
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

describe('Auth View', () => {
    it('it renders the log in button', () => {
        const wrapper = shallow(<AuthView />);
        expect(wrapper.find('button').text()).toEqual('Sign In With Google');
    });
});

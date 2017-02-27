import React from 'react';
import AuthView from './AuthView';
import '../database'
import firebase from 'firebase'
import { shallow } from 'enzyme';
import { browserHistory } from 'react-router';

describe('Auth View', () => {
    it('it renders the log in button', () => {
        const authView = shallow(<AuthView />);
        expect(authView.find('button').text()).toEqual('Sign In With Google');
    });
});
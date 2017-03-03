import React from 'react';
import NewItemView from '../NewItemView';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TextField from 'material-ui/TextField';

describe('new item view', () => {
    it('renders', () => {
        const wrapper = mount(<NewItemView />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});

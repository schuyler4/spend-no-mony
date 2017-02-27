import React from 'react';
import NewItemView from './NewItemView';
import { shallow } from 'enzyme';

describe('new item view', () => {
    it('renders', ()=> {
        const wrapper = shallow(<NewItemView />);
        console.log(wrapper.find('p'))
    });
});
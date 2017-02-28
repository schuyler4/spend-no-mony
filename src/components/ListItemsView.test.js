import React from 'react';
import ListItemsView from './ListItemsView';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('list item view', () => {
  it('renders', () => {
    const wrapper = shallow(<ListItemsView/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);
  });
});

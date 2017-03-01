import React from 'react';
import ListItemsView from '../ListItemsView';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import {List, ListItem} from 'material-ui/List';

describe('list item view', () => {
  it('renders', () => {
    const wrapper = mount(<ListItemsView/>);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find(List).length).toBe(1);
    expect(wrapper.find(ListItem).length).toBe(wrapper.state().items.length);
  });
});

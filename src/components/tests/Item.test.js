import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text'
import Item from '../Item';

describe('item', () => {
  it('renders', () => {
    const props = {title: 'dfasdfasdf', description: 'adfas'};``
    const wrapper = shallow(<Item item={props}/>);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find(Text).length).toBe(2);
  });

  it('displays the right text', () => {
    const props = {title: 'sdfaf', description: 'dfasf'};
    const wrapper =  shallow(<Item item={props}/>);
    expect(wrapper.contains(<Text>{props.title}</Text>)).toBe(true);
    expect(wrapper.contains(<Text>{props.description}</Text>)).toBe(true);
    expect(wrapper.contains(<Text>{props.interests.length}</Text>)).toBe(true);
  });
});

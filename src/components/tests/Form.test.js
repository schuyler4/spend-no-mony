import React from 'react';
import { shallow, mount } from 'enzyme';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import Form from '../Form';

const item = {id: 1, interests: []};

describe('form', () => {
  it('renders', () => {
    const wrapper = shallow(<Form id={item.id}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find(TextField).length).toBe(1);
  });

  it('it will flash a warning if the form is not filled out', () => {
    const wrapper = mount(<Form item={item}/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('errorText')).not.toBe(null);
  });

  it('it will submit a interest if the form is filled out', () => {
    const wrapper = mount(<Form item={item}/>);
    wrapper.find(TextField).simulate('change',
      {target: {value: 'becasue i want it'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').length).toBe(1);
  });
});

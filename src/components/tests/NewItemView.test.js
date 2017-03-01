import React from 'react';
import NewItemView from '../NewItemView';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TextField from 'material-ui/TextField';

describe('new item view', () => {
    it('renders', () => {
        const wrapper = shallow(<NewItemView />);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('p').length).toBe(3);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find(TextField).length).toBe(2);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('wont create a item if everything isent filled out', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<NewItemView  submitClicked={onButtonClick} />);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').first().text())
        .toBe(' all fields must be filled out ');
    });

    it('will create an element if everything is filled out', () => {
      const onButtonClick = sinon.spy();
      const wrapper = mount(<NewItemView submitClicked={onButtonClick} />);
      wrapper.find(TextField).get(0).value = 'fasdfas';
      wrapper.find(TextField).get(1).value = 'dfadsf';
      expect(wrapper.find('p').first().text())
      .toBe(' location is not supperted by your browser ');
    });
});

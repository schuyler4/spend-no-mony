import '../database.js';

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      errorText: null,
      itemIndex: null,
      items: null
    };

    this.submitClicked = this.submitClicked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const items = firebase.database().ref('items');

    items.on('value', (itemList) => {
      this.setState({items: itemList.val()});
      console.log(itemList.push({id: 'panda'}));
      itemList.forEach((child, i) => {
        if(child.val().imageId === this.props.item.imageId) {
          this.setState({itemIndex: i});
        }
      });
    });
  }

  onChange(event) {
    this.setState({ inputText: event.target.value });
  }

  submitClicked() {
    if(this.state.inputText === '') {
      this.setState({errorText: 'this field is required'});
      return;
    }
    const items = firebase.database().ref('items');
    console.log(this.state.items);
    const updatedList = this.state.items;
    updatedList[this.state.itemIndex].interests.push(this.state.inputText);

    items.set(updatedList);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Why You Should Get It"
            value={this.state.inputText}
            onChange={this.onChange}
            errorText={this.state.errorText}
          />
          <button onClick={this.submitClicked}>
            Submit
          </button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;

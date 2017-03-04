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
      items:[],
      itemIndex: null,
      interested: false
    };

    this.submitClicked = this.submitClicked.bind(this);
    this.onChange = this.onChange.bind(this);
    this.items = firebase.database().ref('items');
  }

  componentWillMount() {
    let index = 0;

    this.items.on('value', (itemList) => {
      itemList.forEach((child) => {
        this.setState({items: this.state.items.concat([child.val()])});
        if(child.val().imageId === this.props.item.imageId) {
          this.setState({itemIndex: index});
        }
        index += 1
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

    const updatedList = this.state.items;
    const interestInfo = {
      reason: this.state.inputText,
      email: firebase.auth().currentUser.email,
      number: updatedList[this.state.itemIndex].interests.length
    }

    updatedList[this.state.itemIndex].interests.push(interestInfo);
    this.items.set(updatedList);
    this.setState({interested: true});
  }

  renderItems() {
    if(!this.state.interested) {
      return (
        <div>
          <TextField
            hintText="Why You Should Get It"
            value={this.state.inputText}
            onChange={this.onChange}
            errorText={this.state.errorText}
          />
          <button onClick={this.submitClicked}>Submit</button>
        </div>
      );
    }

    return (
      <h1>Thank You, The giver will send you an email if they choose you</h1>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.renderItems()}
      </MuiThemeProvider>
    );
  }
}

export default Form;

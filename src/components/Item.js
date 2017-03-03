import '../database';
import React, { Component } from 'react';
import firebase from 'firebase';

import Text from './Text';
import Form from './Form';

class Item extends Component {
  constructor() {
    super()
    this.state = {image: ''};
  }

  componentWillMount() {
    const image = firebase.storage().ref(`images/${this.props.item.imageId}`);

    image.getDownloadURL().then((url) => {
      this.setState({image: url});
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.image} height={300} role="presentation" />
        <Text> {this.props.item.title} </Text>
        <Text> {this.props.item.description} </Text>
        <Form item={this.props.item} />
      </div>
    );
  }
}

export default Item;

import React, { Component } from 'react';
import firebase from 'firebase';
import Toggle from 'material-ui/Toggle';
import Loader from 'react-loader';
import {List, ListItem} from 'material-ui/List';

import Text from './Text';

class ItemStatus extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      loaded: false,
      open: false
    }

    this.items = firebase.database().ref('items');
  }

  componentDidMount() {
    this.items.on('value', items => {
      items.forEach(item => {
        if(item.val().userId === firebase.auth().currentUser.uid) {
          this.setState({items: this.state.items.concat([item.val()])});
        }
        this.setState({loaded: true});
      });
    });
  }

  renderListItems() {
    return this.state.items.map((item, i) => {
      return <ListItem
        key={i}
        primaryText={item.description}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
        nestedItems={this.renderNestedItems(item.interests)}
      />
    })
  }

  renderNestedItems(interests) {
    return interests.map((interest, i) => {
      if(i !== 0) {
        return <ListItem key={i} primaryText={"reason: " + interest.reason} />
      }
    });
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <div>
          <List>
            {this.renderListItems()}
          </List>
        </div>
      </Loader>
    );
  }
}

export default ItemStatus;

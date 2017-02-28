import React, { Component } from 'react';
import firebase from 'firebase';
import haversine from 'haversine-js';
import {List, ListItem} from 'material-ui/List';

import {List, ListItem} from 'material-ui/List';

class ListItemView extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      lat: 0,
      long: 0,
      value: 1
    };

    this.selectOnChange = this.selectOnChange.bind(this);
  }

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({lat: position.coords.latitude,
          long: position.coords.longitude});
        this.findItems();
      })
    }
  }

  findItems() {
    const options = {
      radius: haversine.EARTH.MILE
    };

    const currentLocation = {
      latitude: this.state.lat,
      longitude: this.state.long
    };

    const database = firebase.database();
    const itemsRef = database.ref('items');
    let items = [];

    itemsRef.on('value', (item) => {
      item.forEach(child => {
        const item = child.val()
        const itemLocation = {
          latitude: item.location.lat,
          longitude: item.location.long
        };

        const difference = haversine(currentLocation, itemLocation, options)
        .toFixed(0);

        if(difference <= this.state.value) {
          items.push(item);
        }
      });

      this.setState({items});
    })
  }

  selectOnChange(event) {
    this.setState({value: event.target.value});
  }

  componentWillMount() {
    this.getLocation();
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.selectOnChange}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    );
  }
}

export default ListItemView;

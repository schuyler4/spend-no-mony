import React, { Component } from 'react';
import firebase from 'firebase';
import haversine from 'haversine-js';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from 'react-loader';

import Item from './Item';

class ListItemView extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      lat: null,
      long: null,
      value: 1,
      detail: false,
      selectedItem: null,
      loaded: false
    };

    this.selectOnChange = this.selectOnChange.bind(this);
    this.findItems = this.findItems.bind(this);
  }

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({lat: position.coords.latitude,
          long: position.coords.longitude});
        this.findItems();
      });
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
        const item = child.val();
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

      this.setState({items, loaded: true});
    })
  }

  selectOnChange(event) {
    this.setState({value: event.target.value});
  }

  componentWillMount() {
    this.getLocation();
  }

  itemClicked(itemIndex) {
    const item = this.state.items[itemIndex];
    this.setState({selectedItem: item, detail: true});
  }

  backClicked(event) {
    this.setState({detail: false});
  }

  renderListItems() {
    return this.state.items.map((item) => {
      return <ListItem
        primaryText={item.title}
        onClick={() => this.itemClicked(this.state.items.indexOf(item))}
        key={this.state.items.indexOf(item)}
      />
    });
  }

  render() {
    if(!this.state.detail) {
      return (
        <Loader loaded={this.state.loaded}>
          <MuiThemeProvider>
            <div>
              <select value={this.state.value} onChange={this.selectOnChange}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <List>
                {this.renderListItems()}
              </List>
            </div>
          </MuiThemeProvider>
        </Loader>
      );
    }
    return (
      <div>
        <RaisedButton label="Back" onClick={this.backClicked.bind(this)}/>
        <Item item={this.state.selectedItem} />
      </div>
    );
  }
}

export default ListItemView;

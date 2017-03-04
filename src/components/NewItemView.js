import '../database';

import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from 'react-loader';

class NewItemView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      image: '',
      fileUrl: '',
      warningText: 'your location will be based of your current location',
      location: {},
      loaded: false
    };
  }

  componentWillMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ location: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }, loaded: true});
      });
      return;
    }
    this.setState({warningText: 'location is not supperted by your browser',
      location: {lat: 'the moon', long: 'the moon'}});
  }

  titleOnChange(event) {
    this.setState({title: event.target.value});
  }

  descriptionOnChange(event) {
    this.setState({description: event.target.value});
  }

  imageOnChange(event) {
    let reader = new FileReader();
    let image = event.target.files[0];

    reader.onloadend = () => {
      this.setState({image: reader.result});
    }

    reader.readAsDataURL(image);
  }

  submitClicked() {
    if(this.state.title === '' && this.state.description === '') {
      this.setState({warningText: 'all fields must be filled out'});
      return;
    }
    const user = firebase.auth().currentUser;
    const image = this.state.image.split(',')[1];
    const imageId = (new Date()).toString() + user.uid;

    if(this.state.image !== '') {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${imageId}`);

      imageRef.putString(image, 'base64');
    }

   const database = firebase.database();
   const itemsRef = database.ref('items').push();

   itemsRef.set({
     title: this.state.title,
     description: this.state.description,
     data: new Date(),
     location: this.state.location,
     imageId: imageId,
     userId: firebase.auth().currentUser.uid,
     interests: [''],
   });

   browserHistory.push('/profile');
  }

  renderImage() {
    if(this.state.image !== '') {
      return <img src={this.state.image} height="300" role="presentation" />;
    }
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <MuiThemeProvider>
            <div>
              <p> {this.state.warningText} </p>
              {this.renderImage()}
              <p>photo:</p>
              <input
                type="file"
                value={this.state.file}
                onChange={this.imageOnChange.bind(this) }
              />
              <TextField
                hintText="title" value={this.state.title}
                onChange={this.titleOnChange.bind(this)}
                name="title"
              />
              <p>description:</p>
              <TextField
                value={this.state.description}
                onChange={this.descriptionOnChange.bind(this)}
                name="description"
              />
              <button onClick={this.submitClicked.bind(this)}>Submit</button>
            </div>
        </MuiThemeProvider>
      </Loader>
    );
  }
}

export default NewItemView;

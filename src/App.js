import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppStore from './js/store/AppStore.js';
import AppActions from './js/actions/AppActions.js';
import AddForm from './js/components/AddForm.js';
import ContactList from './js/components/ContactList.js';
import * as FirebaseAPI from './js/utils/FirebaseAPI.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

function getAppState(){
  return {
    contacts: AppStore.getContacts(),
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: []
      }   
  }

  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
    FirebaseAPI.getContacts();
  }

  componentWillMount(){
    FirebaseAPI.initializeFirebase();
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange)
  }

  _onChange = () =>{
    this.setState(getAppState());
  }

  render() {

    return (
      <div>
        <AddForm />
        <ContactList state={this.state} />
      </div>
    );
  }
}

export default App;

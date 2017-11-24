import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, Table } from 'react-bootstrap';
import AppStore from '../store/AppStore.js';
import AppActions from '../actions/AppActions.js';
import AddForm from './AddForm.js';
import Contact from './Contact.js';

import '../../App.css';

class ContactList extends Component {

  render() {

    let contacts = [];

    if(!Array.isArray(this.props.state.contacts)) {
      return null;
    } else {
      this.props.state.contacts.map((contact, i) => {
          contacts.push( <Contact contact={contact} key={i} id={i} /> );
      });
    }
    
    return (
      <div>
        <h3>Contacts</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ContactList;

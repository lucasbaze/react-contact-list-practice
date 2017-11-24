import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import AppStore from '../store/AppStore.js';
import AppActions from '../actions/AppActions.js';
import AddForm from './AddForm.js';

import '../../App.css';


class Contact extends Component {

  render() {

    return (
        <tr>
          <td>{this.props.contact.name}</td>
          <td>{this.props.contact.phone}</td>
          <td>{this.props.contact.email}</td>
        </tr>
    );
  }
}

export default Contact;

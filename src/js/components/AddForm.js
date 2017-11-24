import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import * as AppActions from '../actions/AppActions.js';

import '../../App.css';

class AddForm extends Component {

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: e.target.elements[0].value,
      phone: e.target.elements[1].value,
      email: e.target.elements[2].value,
    }
    AppActions.saveContact(contact);
  }

  render() {
    return (
      <div className="well">
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <h3>Add a New Contact</h3>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <FormControl type="text" ref="name" placeholder="Add Contact Name..." />
                </FormGroup>
                <FormGroup>
                  <FormControl type="text" ref="phone" placeholder="Add Phone Number..." />
                </FormGroup>
                <FormGroup>
                  <FormControl type="text" ref="email" placeholder="Add Email Address..." />
                </FormGroup>
                <Button bsStyle="primary" type="submit">Add Contact</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddForm;

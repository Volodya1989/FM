import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class Notes extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type your notes here...</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
    Save
  </Button>
        </Form>
      </div>
    );
  }
}

export default Notes;

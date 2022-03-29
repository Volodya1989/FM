import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Family Planner</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/savedM">Saved Messages</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<h1>WELCOME!! SAVED MESSAGES PAGE </h1>


            </div>
        );
    }
}

export default Home;

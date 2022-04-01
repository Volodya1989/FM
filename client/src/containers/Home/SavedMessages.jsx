import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Home extends Component {
  state = {
    notes: ""
  };
   handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ notes: e.target.value });
  };


  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Family Planner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/savedM"  handleInputChange={this.handleInputChange} >Saved Messages</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <h1>WELCOME!! SAVED MESSAGES PAGE </h1>
      </div>
    );
  }
}

export default Home;

// handleSaveBook = (e) => {
//   e.preventDefault();
//   const arrayOfBooks = this.state.books;
//   //use filter to save book into new array of saved books
//   const filteredArray = arrayOfBooks.filter((book) => book.id === e.target.id);
//   console.log(filteredArray);
//   const svBooks = filteredArray[0];
//   console.log(svBooks);

//   API.saveOneBook(svBooks)
//     .then(this.setState({ message: alert("Book is saved") }))
//     .catch((err) => {
//       console.log(err);
//     });
// };

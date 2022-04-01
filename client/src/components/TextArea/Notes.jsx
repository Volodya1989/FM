import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [itemName, setItemName] = useState("Hello");

  const handleNotesSubmit = (e) => {
    e.preventDefault();
    setNotes({ notes: itemName });
    console.log(notes);
    setItemName("");
  };

  return (
    <div>
      <Form onSubmit={handleNotesSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={itemName}
            placeholder="Enter your wonderful plans here"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>

      <ListGroup>
        <ListGroup.Item>List of notes</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// class Notes extends Component {
//   render() {
//     return (
//       <div>
//         <Form>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Type your notes here...</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//     Save
//   </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default Notes;

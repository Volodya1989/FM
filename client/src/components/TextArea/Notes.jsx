import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// import API from "../../utils/API";
import axios from "axios";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [itemName, setItemName] = useState("");
  const [dayName, setDayName] = useState("");

  const handleNotesSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        id: notes.length,
        name: itemName,
        day: dayName
      },
    ]);
    console.log(notes);
    setItemName("");
    setDayName("");
  };

  // const saveNotes =()=>{
  //   API.saveNote(notes)
  //   .then((res) => {
  //     console.log("Notes were saved!")
  //   })
  //   .catch((err) => {
  //     console.log("this is error message  " + err);
  //   });
  // }

  const renderNotesList = notes.map((note) => {
    return (
      <ListGroup key={note.id}>
        <div>{note.day}</div>
        <ListGroup.Item>{note.name}</ListGroup.Item>
      </ListGroup>
    );
  });

  const saveNotes = () => {
    axios
      .post("/api/notes", notes)
      .then((res) => {
        console.log("Notes were saved!");
      })
      .catch((err) => {
        console.log("this is error message  " + err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleNotesSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Day of the Week</Form.Label>
    <Form.Control type="text"
     placeholder="Enter day of the week that you are planning to work on this great task..."
     value={dayName}
     onChange={(e) => {
      setDayName(e.target.value);
    }}
    
     />
    <Form.Text className="text">
    </Form.Text>
  </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes </Form.Label>
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
        <Button variant="primary" type="submit" onClick={(e) => saveNotes(e)}>
          Save
        </Button>
      </Form>
      <div>{renderNotesList}</div>
    </div>
  );
}

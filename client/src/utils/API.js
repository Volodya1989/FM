import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //Should return current note from api
  getDirection: () => {
    return axios.get("http://localhost:3000/");
  }, 
  //Should return all saved notes
  getAllNotes: () => {
    return axios.get("/api/notes");
  }, 
   // Will be used to get  one note with the given id
  getOneNote: (id) => {
    return axios.get(`/api/notes/${id}`);
  },
  //  Will be used to save a new note to the db.
  saveNote: (savedNotes) => {
    return axios.post("/api/notes", savedNotes);
  },

  // Will be used to update  one note with the given id
  updateOneNote: (id, data) => {
    return axios.put(`/api/notes/${id}`,{data});
  },
  //Will be used to delete a book from the db by id.
  deleteNote: (id) => {
    return axios.delete(`/api/notes/${id}`);
  },
};
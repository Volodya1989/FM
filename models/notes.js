const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  notes: {
    type: Array,
    trim: true,
    // required: "Enter a notes name.",
  },
  item: {
    type: String,
    trim: true,
  },
  day: {
    type: String,
    trim: true,
  },
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;

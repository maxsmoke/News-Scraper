const MONGOOSE = require("mongoose");

let Schema = MONGOOSE.Schema;

let NoteSchema = new Schema({
    title: String,
    body: String
});

let Note = MONGOOSE.model("Note", NoteSchema);

module.exports = Note;
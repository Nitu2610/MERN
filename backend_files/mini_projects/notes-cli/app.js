const { listNote, addNote, removeNote } = require( "./notes")

const command = process.argv[2];
const note = process.argv[3];

switch (command) {
  case "add":
    addNote(note);
    break;
  case "remove":
    removeNote(note);
    break;
  case "list":
    listNote();
    break;

  default:
   console.log("Invalid command")
}

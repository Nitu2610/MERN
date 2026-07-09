const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "notes.json");

const readData = () => {
  let data=fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data)
};

const saveNote = (note) => {
  const oldData = readData();
  oldData.push(note);
 fs.writeFileSync(dbPath, JSON.stringify(oldData));
};

 const addNote = (note) => {
  if(!notes || note.trim() === "") return console.log("data is empty to save the file.")
  saveNote(note);
  return console.log("data is updated.");
};
 const removeNote = (note) => {
  const oldData = readData();
  let newData = oldData.filter((ele) => ele !== note);
  fs.writeFileSync(dbPath, JSON.stringify(newData));
};
 const listNote = () => {
  const data = readData();
  return console.log(data);
};


module.exports ={addNote, removeNote, listNote}
const fs = require("fs");
const path = require("path");
const express = require("express");

const filePath=path.join("notes.json")

const readFiles=()=>{
  return fs.readFileSync(filePath,'utf-8')
}

const PORT = 6004;
const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("note api home page.");
});

app.get("/", (req, res) => {
  res.send(readFiles());
});

app.listen(PORT, () =>
  console.log(`The app is running on the port ${PORT}`),
);
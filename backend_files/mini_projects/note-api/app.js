const fs = require("fs");
const path = require("path");
const express = require("express");

const filePath = path.join("notes.json");
const logger = (req, res, next) => {
  console.log(`The URL method is ${req.method} and the URL is  ${req.url}`);
  next();
};

const validator = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "Incomple details !!" });
  next();
};

const PORT = 6004;
const app = express();
app.use(express.json());
app.use(logger);

const readFiles = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
   console.log(error);
    return [];
  }
};

const writeFile = (note) => {
 try {
   const oldData = readFiles();
  const id = oldData.length === 0 ? 1 : oldData[oldData.length - 1].id + 1;
  const updatedData = [...oldData, { ...note, id }];
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
 } catch (error) {
  res.status(500).json({
    message:error.message
  })
 }
};

app.get("/home", (req, res) => {
  res.send("note api home page");
});

app.get("/", (req, res) => {
  res.send(readFiles());
});

app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readFiles().find((item) => item.id === id);
  if (!data) {
    return res.status(403).json({ message: "User doesnt exist." });
  }
  res.send(data);
});

app.get("/search", (req, res) => {
  const { title, content } = req.query;
  if (!title) {
    return res.status(400).send("Title query is required");
  }
  const notes = readFiles();
  const result = notes.filter((item) =>
    item.title.toLowerCase().includes(title.toLowerCase()),
  );
  console.log(result);
  res.send(result);
});

app.post("/add-note", validator, (req, res) => {
  writeFile(req.body);
  res.send("data saved successfully");
  console.log("data saved successfully");
});

app.put("/update-note/:id", (req, res) => {
  const id = Number(req.params.id);

  const noteExists = notes.some((item) => item.id === id);

  if (!noteExists) {
    return res.status(404).json({
      message: "Note not found.",
    });
  }

  const data = readFiles().map((item) => {
    if (item.id === id) {
      return {
        id,
        title: req.body.title,
        content: req.body.content,
      };
    }
    return item;
  });
  // console.log(data)
  if (!data) {
    return res.status(403).json({ message: "User doesnt exist." });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(200).json({
    message: "data updated successfully",
  });
});

app.patch("/update-note/:id", (req, res) => {
  const id = Number(req.params.id);
  const noteExists = notes.some((item) => item.id === id);

  if (!noteExists) {
    return res.status(404).json({
      message: "Note not found",
    });
  }
  const data = readFiles().map((item) => {
    if (item.id === id) {
      return {
        ...item,
        ...req.body,
      };
    }
    return item;
  });
  // console.log(data)
  if (!data) {
    return res.status(403).json({ message: "User doesnt exist." });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.send("data updated successfully");
  console.log("data updated successfully");
});

app.delete("/delete-note/:id", (req, res) => {
  const id = Number(req.params.id);

  const existingNote = readFiles().some((item) => item.id === id);
  if (!existingNote)
    return res.status(404).json({
      message: "Unable to find the note with id, cant delete the note.",
    });

  const updatedData = readFiles().filter((item) => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  res.status(200).json({
    message: "note is successfully deleted.",
  });
});

app.listen(PORT, () => console.log(`The app is running on the port ${PORT}`));

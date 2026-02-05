const express = require("express");
const connection =require('./config/db');

const server = express();

server.get("/", (req, res) => {
  res.send("the server is working!!!!");
});

const PORT = 6001;
server.listen(6001, async () => {
  try {
    await connection;
    console.log(` Server is running on the port ${PORT}`);
    console.log(`DataBase is connected with MongoDB.`);
  } catch (error) {
    console.log(
      `Unable to connect with the server or dt due to error: ${error}`,
    );
  }
});

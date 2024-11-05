// const http = require("http");

// const handleServer = (req, res) => {
//   console.log("Request has been sent");
//   res.end();
// };

// const server = http.createServer(handleServer);

// server.listen(4000, "127.0.0.1", () => console.log("Server is running"));

const express = require("express");

const server = express();

const handleServer = (req, res) => {
  res.send("Hello World");
};

const handleDelete = (req, res) => {
  res.send("About");
};
const handlePut = (req, res) => {
  res.send("Profile");
};

const handlePost = (req, res) => {
  res.send("details");
};

server.put("/details", handlePost);
server.post("/profile", handlePut);
server.delete("/about", handleDelete);
server.get("/", handleServer);

server.listen(4000, "127.0.0.1", () => {
  console.log("Server is running");
});

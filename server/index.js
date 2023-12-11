const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Serve the React app for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(4000, () => console.log("server listen"));

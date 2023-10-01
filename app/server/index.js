const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// Routes
const helloRouter = require("./routes/hello");

// App definition
const app = express(express.json());
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Media
app.use("/media", express.static(path.join(__dirname, "..", "media")));

// Client
app.use(express.static(path.join(__dirname, "client")));

// API or client routes
app.use("/", helloRouter);

// Client
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

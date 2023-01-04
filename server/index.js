const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
// require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

// if I am not in my production environment, I want access to the secrets.js file inside of my local machine (each dev should have one) --> development test
if (process.env.NODE_ENV !== "production") require("../secrets");
console.log("env variables", process.env.NODE_ENV);

// Middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes"));

// Send index.html if request doesn't match a route
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Handle 500 errors:
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(port, function () {
  console.log(`Your server is listening on port ${port}`);
});

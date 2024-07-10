const express = require("express");
const route = express.Router();

route.get("/prod", (req, res) => {
  res.send("Welcome to our Prod API");
});

module.exports = route;

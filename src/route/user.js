const express = require("express");
const {
  sqiGreet,
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

const route = express.Router();

route.get("/sqi", sqiGreet);

route.get("/", getAllUsers);

route.post("/", createNewUser);

route.patch("/:id", updateUser);

route.delete("/:id", deleteUser);
module.exports = route;

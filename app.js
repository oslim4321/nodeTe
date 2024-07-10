const express = require("express");
const userRoute = require("./src/route/user");
const productRoute = require("./src/route/product");

const app = express();

// middleware -> they are code that run in bg, before the main code runs
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);


app.listen(3005, "localhost", () => {
  console.log("Server is running on port 3005");
});

// POST -> can be use to send and get something from the server
// GET -> can only be user to get request from the server

// /GET -> /getUser?email=adewaleselim

// MVC-> model -> view -> controller

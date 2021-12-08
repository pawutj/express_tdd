const express = require("express");
const mongodb = require("./mongodb/mongodb.connect");
const todoRouter = require("./routers/todo.router");
const app = express();

mongodb.connect();
app.use(express.json());

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.json("Hello World");
});

module.exports = app;

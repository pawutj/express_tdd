const express = require("express");
const TodoController = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", TodoController.createTodo);

router.get("/", TodoController.getTodos);

router.get("/:todoId", TodoController.getTodoById);
module.exports = router;

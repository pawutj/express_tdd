const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mockdata/new-todo.json");
TodoModel.create = jest.fn();
let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});
describe("TodoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createToDo F", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
});

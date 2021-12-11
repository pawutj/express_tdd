const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mockdata/new-todo.json");
const allTodos = require("../mockdata/all-todos.json");
TodoModel.create = jest.fn();
TodoModel.find = jest.fn();
let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
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

  it("should return 201", async () => {
    await TodoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
  });

  it("should return jsonbody", async () => {
    TodoModel.create.mockReturnValue(newTodo);
    await TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});

describe("Todo Controller.getTodos", () => {
  it("should have get function", () => {
    expect(typeof TodoController.getTodos).toBe("function");
  });

  it("should  call todo find", async () => {
    await TodoController.getTodos(req, res, next);
    expect(TodoModel.find).toHaveBeenCalledWith({});
  });

  it("should return all todo", async () => {
    TodoModel.find.mockReturnValue(allTodos);
    await TodoController.getTodos(req, res, next);
    expect(res._getJSONData()).toStrictEqual(allTodos);
  });
});

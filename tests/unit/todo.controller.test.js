const TodoController = require("../../controllers/todo.controller");

describe("TodoController.createTodo", () => {
  it("should have a createToDo F", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
});

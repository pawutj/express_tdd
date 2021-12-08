const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mockdata/new-todo.json");

const endpointUrl = "/todos";

describe("Todo endpoint", () => {
  it("Post todo ", async () => {
    const response = await request(app).post(endpointUrl).send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTodo.title);
  });
});

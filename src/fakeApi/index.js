import { createServer, Model } from "miragejs";

export default function Server() {
  createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get("/api/todo-list", (schema) => {
        return schema.todos.all();
      });

      this.post("/api/add-todo", (schema, request) => {
        const newTodo = JSON.parse(request.requestBody);
        return schema.todos.create(newTodo);
      });

      this.post("/api/update-todo", (schema, request) => {
        const id = JSON.parse(request.requestBody);
        const curTodo = schema.todos.find(id);
        curTodo.update({ completed: !curTodo.completed });
        return curTodo;
      });
    },
  });
}

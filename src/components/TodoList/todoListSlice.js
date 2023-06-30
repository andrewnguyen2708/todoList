// import { ADD_TO_DO, UPDATE_COMPLETED } from "../../redux/constants";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 1, name: "learn react", prioriry: "Medium", completed: false },
// ];

// function toDoListReducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case ADD_TO_DO:
//       return [...state, action.payload];

//     case UPDATE_COMPLETED: {
//       const newToDoList = [...state];
//       const index = newToDoList.findIndex((item) => item.id === action.payload);
//       if (index >= 0) {
//         newToDoList[index].completed = !state[index].completed;
//       }
//       return newToDoList;
//     }
//     default:
//       return state;
//   }
// }

const todoListSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  // reducers: {
  //   addTodo: (state, action) => {
  //     state.todos.push(action.payload);
  //   },
  //   toggleStatus: (state, action) => {
  //     const curTodo = state.todos.find((item) => item.id === action.payload);
  //     curTodo.completed = !curTodo.completed;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const curTodo = state.todos.find((item) => item.id === action.payload);
        curTodo.completed = !curTodo.completed;
      });
  },
});

const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todo-list");
  const data = await res.json();
  return data.todos;
});

const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const res = await fetch("/api/add-todo", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data.todos;
});

const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const res = await fetch("/api/update-todo", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  console.log(data);
  return data.todos.id;
});

export { fetchTodos, addTodo, updateTodo };

export default todoListSlice;

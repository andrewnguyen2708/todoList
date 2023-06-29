// import { ADD_TO_DO, UPDATE_COMPLETED } from "../../redux/constants";

import { createSlice } from "@reduxjs/toolkit";

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
  initialState: [
    { id: 1, name: "learn react", prioriry: "Medium", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const curTodo = state.find((item) => item.id === action.payload);
      curTodo.completed = !curTodo.completed;
    },
  },
});
export default todoListSlice;

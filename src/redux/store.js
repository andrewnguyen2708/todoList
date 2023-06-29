// import { createStore } from "redux";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;

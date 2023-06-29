import {
  ADD_TO_DO,
  FILTER_COMPLETED,
  FILTER_PRIORIRY,
  FILTER_SEARCH,
  UPDATE_COMPLETED,
} from "./constants";

const initialState = {
  filters: {
    search: "",
    prioriry: ["High", "Medium", "Low"],
    completed: "All",
  },
  toDoList: [
    { id: 1, name: "learn react", prioriry: "Medium", completed: false },
  ],
};

function rootReducer(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_DO:
      return { ...state, toDoList: [...state.toDoList, action.payload] };
    case UPDATE_COMPLETED: {
      const newToDoList = [...state.toDoList];
      const index = newToDoList.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        newToDoList[index].completed = !state.toDoList[index].completed;
      }
      return { ...state, toDoList: newToDoList };
    }
    case FILTER_SEARCH:
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    case FILTER_PRIORIRY:
      return {
        ...state,
        filters: { ...state.filters, prioriry: action.payload },
      };
    case FILTER_COMPLETED:
      return {
        ...state,
        filters: { ...state.filters, completed: action.payload },
      };
    default:
      return state;
  }
}

export default rootReducer;

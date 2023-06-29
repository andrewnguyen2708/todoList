// import {
//   FILTER_COMPLETED,
//   FILTER_PRIORIRY,
//   FILTER_SEARCH,
// } from "../../redux/constants";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   search: "",
//   prioriry: ["High", "Medium", "Low"],
//   completed: "All",
// };

// export default filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case FILTER_SEARCH:
//       return { ...state, search: action.payload };

//     case FILTER_PRIORIRY:
//       return { ...state, prioriry: action.payload };

//     case FILTER_COMPLETED:
//       return { ...state, completed: action.payload };
//     default:
//       return state;
//   }
// }

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    completedStatus: "All",
    prioriries: ["High", "Medium", "Low"],
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    completedStatusFilter: (state, action) => {
      state.completedStatus = action.payload;
    },
    prioririesFilter: (state, action) => {
      state.prioriries = action.payload;
    },
  },
});

export default filtersSlice;

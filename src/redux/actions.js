import {
  ADD_TO_DO,
  FILTER_COMPLETED,
  FILTER_PRIORIRY,
  FILTER_SEARCH,
  UPDATE_COMPLETED,
} from "./constants";

// To do List
function addToDo(data) {
  return {
    type: ADD_TO_DO,
    payload: data,
  };
}

function updateCompleted(data) {
  return {
    type: UPDATE_COMPLETED,
    payload: data,
  };
}

// Filter
function filterSearch(data) {
  return {
    type: FILTER_SEARCH,
    payload: data,
  };
}

function filterPrioriry(data) {
  return {
    type: FILTER_PRIORIRY,
    payload: data,
  };
}

function filterCompleted(data) {
  return {
    type: FILTER_COMPLETED,
    payload: data,
  };
}

export {
  addToDo,
  filterSearch,
  filterPrioriry,
  filterCompleted,
  updateCompleted,
};

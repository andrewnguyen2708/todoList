import { createSelector } from "@reduxjs/toolkit";

const filterSearchSelector = (state) => state.filters.search;
const filterPriorirySelector = (state) => state.filters.prioriries;
const filterCompletedSelector = (state) => state.filters.completedStatus;

const toDoListSelector = (state) => state.todoList.todos;
const remainerListSelector = createSelector(
  filterSearchSelector,
  filterPriorirySelector,
  filterCompletedSelector,
  toDoListSelector,
  (search, prioriries, completedStatus, list = []) => {
    return list.filter(
      (item) =>
        item.name.includes(search) &&
        (completedStatus === "All" ||
          completedStatus === (item.completed ? "Completed" : "Todo")) &&
        prioriries.includes(item.prioriry)
    );
  }
);

export {
  filterSearchSelector,
  filterPriorirySelector,
  filterCompletedSelector,
  remainerListSelector,
};

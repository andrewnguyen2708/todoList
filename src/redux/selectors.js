import { createSelector } from "reselect";

const filterSearchSelector = (state) => state.filters.search;
const filterPriorirySelector = (state) => state.filters.prioriry;
const filterCompletedSelector = (state) => state.filters.completed;

const toDoListSelector = (state) => state.toDoList;
const remainerListSelector = createSelector(
  filterSearchSelector,
  filterPriorirySelector,
  filterCompletedSelector,
  toDoListSelector,
  (search, prioriry, completed, list) => {
    return list.filter(
      (item) =>
        item.name.includes(search) &&
        (completed === "All" ||
          completed === (item.completed ? "Completed" : "Todo")) &&
        prioriry.includes(item.prioriry)
    );
  }
);

export {
  filterSearchSelector,
  filterPriorirySelector,
  filterCompletedSelector,
  remainerListSelector,
};

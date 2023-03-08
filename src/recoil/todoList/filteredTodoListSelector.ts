import { selector } from "recoil";
import { Todo, todoListState } from "./todoListAtom";
import { FilterTypes, todoListFilterState, TODO_LIST_FILTER_TYPES } from "./todoListFilterAtom";

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get({ get }) {
    const todoList = get<Todo[]>(todoListState);
    const todoListFilter = get<FilterTypes>(todoListFilterState);

    switch(todoListFilter) {
      default:
      case TODO_LIST_FILTER_TYPES.SHOW_ALL:
        return todoList;
      case TODO_LIST_FILTER_TYPES.DONT_ONLY:
        return todoList.filter(todoItem => !todoItem.isComplete);
      case TODO_LIST_FILTER_TYPES.DONE_ONLY:
        return todoList.filter(todoItem => todoItem.isComplete);
    }
    
  }
});
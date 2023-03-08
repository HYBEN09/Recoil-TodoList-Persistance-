import { selector } from "recoil";
import { todoListState } from './todoListAtom';

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get({ get }) {
    const todoList = get(todoListState);
    const totalCount = todoList.length;
    const totalDoneCount = todoList.filter(todoItem => todoItem.isComplete).length;
    const totalDontCount = todoList.filter(todoItem => !todoItem.isComplete).length;
    const percentDone = totalCount === 0 ? 0 : (totalDoneCount / totalCount);

    return {
      totalCount,
      totalDoneCount,
      totalDontCount,
      percentDone
    };

  }
});


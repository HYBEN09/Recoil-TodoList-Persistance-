import { atom } from 'recoil';
import { persistAtom } from '../effects/persistAtom';

export enum TODO_LIST_FILTER_TYPES {
  SHOW_ALL = 'SHOW ALL',
  DONT_ONLY = 'DONT ONLY',
  DONE_ONLY = 'DONE ONLY',
}

export type FilterTypes =
  | TODO_LIST_FILTER_TYPES.SHOW_ALL
  | TODO_LIST_FILTER_TYPES.DONE_ONLY
  | TODO_LIST_FILTER_TYPES.DONT_ONLY;

export const todoListFilterState = atom<FilterTypes>({
  key: 'todoListFilterState',
  default: TODO_LIST_FILTER_TYPES.SHOW_ALL,
  effects: [persistAtom]
});

import { atom } from 'recoil';
import { persistAtom } from '../effects/persistAtom';

export interface Todo {
  id: string;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
  effects: [persistAtom]
});

// AtomFamily 학습하기

// SelectorFamily 학습하기

// Recoil 지속성(Atom Effects) 학습하기
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { v4 as getRendomId } from 'uuid';
import { useId, useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState, Todo } from '@/recoil/todoList';

export default function TodoItemCreator(): JSX.Element {
  const id = useId();
  const inputRef = useRef<null|HTMLInputElement>(null);

  const [todoInput, setTodoInput] = useState<string>('');
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };
  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase().includes('enter')) {
      addTodoItem();
    }
  }
  const addTodoItem = () => {
    const value = todoInput.trim();
    if (!value) { return }

    const newTodo: Todo = {
      id: getRendomId(),
      text: value,
      isComplete: false,
    };

    setTodoList((todoList) => [...todoList, newTodo]);
    setTodoInput('');

    const { current: inputElement } = inputRef; 
    if (inputElement) { inputElement.value = ''; }
  }
  
  const setTodoList = useSetRecoilState<Todo[]>(todoListState);
  const handleAddTodo = () => {
    if (todoInput.trim().length === 0) {
      return alert('할 일 입력해주세요.');
    }
    addTodoItem();
  };

  return (
    <StyledTodoInputWrapper>
      <label htmlFor={id}>할 일 추가</label>
      <input id={id} ref={inputRef} type="text" onChange={debounce(handleChangeInput, 300)} onKeyUp={handleKeyUpInput} />
      <button type="button" onClick={handleAddTodo}>추가</button>
    </StyledTodoInputWrapper>
  );
}

const StyledTodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  label {
    overflow: hidden;
    position: absolute;
    clip: rect(0,0,0,0);
    clip-patch: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }

  input {
    padding: 0.8em;
    flex: 1;
  }

  button {
    border-color: #919291;
  }
`;

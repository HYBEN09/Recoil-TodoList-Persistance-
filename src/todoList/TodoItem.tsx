import { useId } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { Todo, todoListState } from '@/recoil/todoList';

interface Props {
  todo: Todo;
  children?: React.ReactNode;
}

export default function TodoItem({ todo }: Props): JSX.Element {

  const id = useId();

  const setTodoListState = useSetRecoilState<Todo[]>(todoListState);

  const handleChangeCompleteState = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoListState((todoListState) =>
      todoListState.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, isComplete: !todoItem.isComplete }
          : todoItem
      )
    );
  };

  const handleDeleteTodo = () => {
    setTodoListState((todoListState) =>
      todoListState.filter((todoItem) => todoItem.id !== todo.id)
    );
  };

  return (
    <StyledTodoItem>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={todo.isComplete}
          onChange={handleChangeCompleteState}
        />
        <span>{todo.text}</span>
      </label>
      <button type="button" onClick={handleDeleteTodo}>
        삭제
      </button>
    </StyledTodoItem>
  );
}

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 12px 0;

  label {
    display: flex;
    align-items: center;
  }

  input {
    width: 16px;
    height: 16px;

    &:checked + span {
      text-decoration: line-through;
    }
  }

  button {
    border-color: #919291;
  }
`;

import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Todo, filteredTodoListState } from '@/recoil/todoList';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from '@/todoList/TodoListStats';
import TodoListFilters from '@/todoList/TodoListFilters';

export default function TodoList(): JSX.Element {
  const todos = useRecoilValue<Todo[]>(filteredTodoListState);

  return (
    <StyledTodoList>
      <>
        <div>
          <TodoListFilters />
          <TodoItemCreator />
          {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
        <TodoListStats />
      </>
    </StyledTodoList>
  );
}

const StyledTodoList = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
`;

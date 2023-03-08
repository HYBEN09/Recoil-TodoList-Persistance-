import { forwardRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todoListFilterState, TODO_LIST_FILTER_TYPES } from '@/recoil/todoList';

export default function TodoListFilter(): JSX.Element {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleCheckRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      default:
      case TODO_LIST_FILTER_TYPES.SHOW_ALL:
        setFilter(TODO_LIST_FILTER_TYPES.SHOW_ALL);
        break;
      case TODO_LIST_FILTER_TYPES.DONE_ONLY:
        setFilter(TODO_LIST_FILTER_TYPES.DONE_ONLY);
        break;
      case TODO_LIST_FILTER_TYPES.DONT_ONLY:
        setFilter(TODO_LIST_FILTER_TYPES.DONT_ONLY);
    }
  };

  return (
    <StyledWrapper>
      <Radio
        name="filter"
        onChange={handleCheckRadio}
        defaultChecked={filter === TODO_LIST_FILTER_TYPES.SHOW_ALL}
        value={TODO_LIST_FILTER_TYPES.SHOW_ALL}
      >
        모두 보기
      </Radio>
      <Radio
        name="filter"
        onChange={handleCheckRadio}
        defaultChecked={filter === TODO_LIST_FILTER_TYPES.DONT_ONLY}
        value={TODO_LIST_FILTER_TYPES.DONT_ONLY}
      >
        할 일만 보기
      </Radio>
      <Radio
        name="filter"
        onChange={handleCheckRadio}
        defaultChecked={filter === TODO_LIST_FILTER_TYPES.DONE_ONLY}
        value={TODO_LIST_FILTER_TYPES.DONE_ONLY}
      >
        한 일만 보기
      </Radio>
    </StyledWrapper>
  );
}

interface RadioProps {
  name: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { name, children, ...restPrpos },
  ref
): JSX.Element {
  return (
    <StyledLabel>
      <input type="radio" name={name} {...restPrpos} ref={ref} />
      {children}
    </StyledLabel>
  );
});

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

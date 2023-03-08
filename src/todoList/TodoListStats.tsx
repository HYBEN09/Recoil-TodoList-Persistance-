import { todoListStatsState } from '@/recoil/todoList';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function TodoListStats(): JSX.Element {
  const {
    totalCount,
    totalDoneCount,
    totalDontCount,
    percentDone
  } = useRecoilValue(todoListStatsState);

  const formatPercentDone = () => `${Math.round(percentDone * 100)}%`;

  return (
    <StyledWrapper>
      <ul>
        <li>할 일 총 갯수 : <b>{totalCount}</b></li>
        <li>할 일 갯수 : <b>{totalDontCount}</b></li>
        <li>한 일 총 갯수 : <b>{totalDoneCount}</b></li>
        <li>한 일 비율 : <b>{formatPercentDone()}</b></li>
      </ul>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;

  ul {
    margin-top: 0;
    text-align: left;
    padding-left: 1em;
    font-size: 12px;
  }

  li {
    padding: 4px;
  }
`;
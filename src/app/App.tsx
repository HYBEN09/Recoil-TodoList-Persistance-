import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from '@/todoList/TodoList';
import PositionBoxes from '@/PositionBoxes';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
        <PositionBoxes />
      </div>
    </RecoilRoot>
  );
}

export default App;

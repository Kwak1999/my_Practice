import logo from './logo.svg';
import './App.css';
import {TodoListStats} from "./components/TodoListStats";
import {TodoListFilters} from "./components/TodoListFilters";
import {TodoItemCreator} from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
        <TodoList />
        {/*<TodoListStats />*/}
        {/*<TodoListFilters />*/}
        {/*<TodoItemCreator />*/}

    </div>
  );
}

export default App;

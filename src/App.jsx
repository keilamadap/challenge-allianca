import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <MyContextProvider>
      <TodoList />
    </MyContextProvider>
  );
}

export default App;

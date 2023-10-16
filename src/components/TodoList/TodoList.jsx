import * as S from "./styles";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import EmptyTasks from "../utils/EmptyTasks";

const TodoList = () => {
  const { tasks } = useContext(MyContext);

  return (
    <S.Container>
      <S.Title>To Do List</S.Title>
      <TodoForm />

      {tasks?.length > 0 ? <TodoItem /> : <EmptyTasks />}
    </S.Container>
  );
};

export default TodoList;

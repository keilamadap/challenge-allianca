import * as S from "./styles";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const TodoList = () => {
  const { tasks } = useContext(MyContext);

  return (
    <S.TodoListContainer>
      <S.Title>To Do List</S.Title>
      <TodoForm />
      {tasks?.length > 0 ? (
        <TodoItem />
      ) : (
        <S.Paragraph>Sem tarefas por enquanto!</S.Paragraph>
      )}
    </S.TodoListContainer>
  );
};

export default TodoList;

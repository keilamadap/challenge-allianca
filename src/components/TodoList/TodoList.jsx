import * as S from "./styles";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { Icon } from "@iconify/react";

const TodoList = () => {
  const { tasks } = useContext(MyContext);

  return (
    <S.Container>
      <S.Title>To Do List</S.Title>

      <TodoForm />
      {tasks?.length > 0 ? (
        <TodoItem />
      ) : (
        <S.Paragraph>
          Sem tarefas no momento...
          <Icon icon="solar:moon-sleep-bold" width="30" height="30" />
        </S.Paragraph>
      )}
    </S.Container>
  );
};

export default TodoList;

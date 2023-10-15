import * as S from "./styles";
import TodoForm from "../TodoForm/TodoForm";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { Icon } from "@iconify/react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const { tasks } = useContext(MyContext);
  const newTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  const newTasksText =
    newTasks.length > 1
      ? `${newTasks.length} tarefas pendentes:`
      : `${newTasks.length} tarefa pendente:`;
  const completedTasksText =
    completedTasks.length > 1
      ? `${completedTasks.length} tarefas concluídas:`
      : `${completedTasks.length} tarefa concluída:`;

  return (
    <S.Container>
      <S.Title>To Do List</S.Title>
      <TodoForm />

      <S.StyledParagraph>{newTasks[0] && newTasksText}</S.StyledParagraph>

      {tasks.length > 0 ? (
        newTasks.map((task) => <TodoItem key={task.id} task={task} />)
      ) : (
        <S.Paragraph>
          Sem tarefas por enquanto...
          <Icon icon="solar:moon-sleep-bold" width="30" height="30" />
        </S.Paragraph>
      )}

      {completedTasks[0] && (
        <S.StyledParagraph>{completedTasksText}</S.StyledParagraph>
      )}

      {completedTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </S.Container>
  );
};

export default TodoList;

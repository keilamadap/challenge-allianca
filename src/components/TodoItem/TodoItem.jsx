import { useContext } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = () => {
  const { tasks, onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

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
      {newTasks.length ? <S.TasksCounter>{newTasksText}</S.TasksCounter> : null}

      {newTasks.map((task) => (
        <S.StyledDiv key={task.id}>
          <S.StyledInput
            value={task.name}
            disabled
            $iscompleted={task.isCompleted ? "true" : undefined}
          />
          <Icon
            icon="fluent-mdl2:completed-solid"
            color={task.isCompleted ? "green" : "gray"}
            width="30"
            height="30"
            onClick={() => onMarkTaskCompleted(task.id)}
          />
          <Icon
            icon="fluent:delete-24-regular"
            width="30"
            color="red"
            height="30"
            onClick={() => onRemoveTask(task.id)}
          />
        </S.StyledDiv>
      ))}

      {completedTasks.length ? (
        <S.TasksCounter>{completedTasksText}</S.TasksCounter>
      ) : null}

      {completedTasks.map((task) => (
        <S.StyledDiv key={task.id}>
          <S.StyledInput
            value={task.name}
            disabled
            $iscompleted={task.isCompleted ? "true" : undefined}
          />
          <Icon
            icon="fluent-mdl2:completed-solid"
            color={task.isCompleted ? "green" : "gray"}
            width="30"
            height="30"
            onClick={() => onMarkTaskCompleted(task.id)}
          />
          <Icon
            icon="fluent:delete-24-regular"
            width="30"
            color="red"
            height="30"
            onClick={() => onRemoveTask(task.id)}
          />
        </S.StyledDiv>
      ))}
    </S.Container>
  );
};
export default TodoItem;

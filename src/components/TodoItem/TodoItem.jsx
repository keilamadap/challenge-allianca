import { useContext } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = () => {
  const { tasks, onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

  const newTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  const newTasksInfo =
    newTasks.length > 1
      ? `${newTasks.length} tarefas pendentes:`
      : `${newTasks.length} tarefa pendente:`;

  const completedTasksInfo =
    completedTasks.length > 1
      ? `${completedTasks.length} tarefas concluídas:`
      : `${completedTasks.length} tarefa concluída:`;

  const handleTaskItems = (taskList) => {
    return taskList.map((task) => (
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
    ));
  };

  return (
    <S.Container>
      {newTasks.length ? <S.Paragraph>{newTasksInfo}</S.Paragraph> : null}
      {handleTaskItems(newTasks)}

      {completedTasks.length ? (
        <S.Paragraph>{completedTasksInfo}</S.Paragraph>
      ) : null}
      {handleTaskItems(completedTasks)}
    </S.Container>
  );
};

export default TodoItem;

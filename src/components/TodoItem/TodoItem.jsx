import { useContext } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = () => {
  const { tasks, onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <S.Container>
      {tasks &&
        tasks
          .filter((task) => !task.isCompleted)
          .map((task) => (
            <S.StyledDiv key={task.id}>
              <S.StyledInput
                value={task.name}
                disabled
                iscompleted={task.isCompleted ? "true" : undefined}
              />
              <Icon
                icon="fluent-mdl2:completed-solid"
                color={task.isCompleted ? "green" : "gray"}
                width="40"
                height="40"
                onClick={() => onMarkTaskCompleted(task.id)}
              />
              <Icon
                icon="fluent:delete-24-regular"
                width="40"
                color="red"
                height="40"
                onClick={() => onRemoveTask(task.id)}
              />
            </S.StyledDiv>
          ))}
      {completedTasks[0] && (
        <S.StyledParagraph>
          {completedTasks.length > 1
            ? `${completedTasks.length} tarefas concluídas:`
            : `${completedTasks.length} tarefa concluída:`}{" "}
        </S.StyledParagraph>
      )}
      {completedTasks.sort().map((completed) => (
        <S.StyledDiv key={completed.id}>
          <S.StyledInput
            value={completed.name}
            disabled
            iscompleted={completed.isCompleted ? "true" : undefined}
          />
          <Icon
            icon="fluent-mdl2:completed-solid"
            color={completed.isCompleted ? "green" : "gray"}
            width="40"
            height="40"
            onClick={() => onMarkTaskCompleted(completed.id)}
          />
          <Icon
            icon="fluent:delete-24-regular"
            width="40"
            color="red"
            height="40"
            onClick={() => onRemoveTask(completed.id)}
          />
        </S.StyledDiv>
      ))}
    </S.Container>
  );
};
export default TodoItem;

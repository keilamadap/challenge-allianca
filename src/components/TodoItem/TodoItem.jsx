import { useContext, useEffect } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = () => {
  const { tasks, onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <S.Container>
      {tasks &&
        tasks.map((task) => (
          <S.StyledDiv key={task.id}>
            <S.StyledInput
              value={task.name}
              disabled
              isCompleted={task.isCompleted}
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
    </S.Container>
  );
};
export default TodoItem;

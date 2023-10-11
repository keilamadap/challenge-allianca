import { useContext, useEffect } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = () => {
  const { tasks, onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

  return (
    <S.TodoItemContainer>
      {tasks &&
        tasks.map((task, index) => (
          <S.StyledDiv key={index}>
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
              onClick={() => onMarkTaskCompleted(index)}
            />
            <Icon
              icon="fluent:delete-24-regular"
              width="40"
              color="red"
              height="40"
              onClick={() => onRemoveTask(index)}
            />
          </S.StyledDiv>
        ))}
    </S.TodoItemContainer>
  );
};
export default TodoItem;

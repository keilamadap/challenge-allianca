import { useContext } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoItem = ({ task }) => {
  const { onRemoveTask, onMarkTaskCompleted } = useContext(MyContext);

  return (
    <S.Container>
      <S.StyledInput
        value={task.name}
        disabled
        iscompleted={task.isCompleted ? "true" : undefined}
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
    </S.Container>
  );
};

export default TodoItem;

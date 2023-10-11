import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoForm = () => {
  const { onAddTask } = useContext(MyContext);
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState(null);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput, false);
      setTaskInput("");
    } else {
      setError("Insira uma tarefa!");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <>
      <S.TodoForm>
        <S.StyledInput
          placeholder="Escreva uma tarefa..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <Icon
          icon="ph:plus-fill"
          width="55"
          height="55"
          color="#313131"
          style={{ cursor: "pointer" }}
          onClick={handleAddTask}
        />
      </S.TodoForm>
      <S.Box>
        <S.Paragraph> {error && error}</S.Paragraph>
      </S.Box>
    </>
  );
};

export default TodoForm;

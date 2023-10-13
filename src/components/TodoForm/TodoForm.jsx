import { useContext, useState } from "react";
import * as S from "./styles";
import { Icon } from "@iconify/react";
import { MyContext } from "../../context/MyContext";

const TodoForm = () => {
  const { onAddTask, setTasks } = useContext(MyContext);
  const [taskInput, setTaskInput] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      onAddTask(taskInput, false);
      setTaskInput("");
      setMessage("Tarefa adicionada!");
      setIsSuccess(true);
      clearTimeout();
    } else {
      setMessage("Insira uma tarefa!");
      setIsSuccess(false);
      clearTimeout();
    }
  };

  const clearTimeout = () => {
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>Quais as tarefas para hoje?</S.Label>
      <S.Div>
        <S.StyledInput
          placeholder="Escreva uma tarefa..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <S.StyledButton type="submit">
          <Icon
            icon="ph:plus-fill"
            width="55"
            height="55"
            color="#313131"
            style={{ cursor: "pointer" }}
          />
        </S.StyledButton>
      </S.Div>

      <S.StyledMessageDiv>
        {message &&
          (isSuccess ? (
            <S.Success>{message}</S.Success>
          ) : (
            <S.Error>{message}</S.Error>
          ))}
      </S.StyledMessageDiv>
    </S.Form>
  );
};

export default TodoForm;

import { useContext, useState } from "react";
import * as S from "./styles";
import { MyContext } from "../../context/MyContext";

const TodoForm = () => {
  const { onAddTask } = useContext(MyContext);
  const [taskInput, setTaskInput] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      onAddTask(taskInput, false);
      setTaskInput("");
      setMessage("Tarefa adicionada");
      setIsSuccess(true);
      clearTimeout();
    } else {
      setMessage("Insira uma tarefa");
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
      <S.Div>
        <S.StyledInput
          autoFocus
          placeholder="Escreva uma tarefa..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <S.StyledButton type="submit">Nova Tarefa</S.StyledButton>
      </S.Div>

      {message &&
        (isSuccess ? (
          <S.Success>{message}</S.Success>
        ) : (
          <S.Error>{message}</S.Error>
        ))}
    </S.Form>
  );
};

export default TodoForm;

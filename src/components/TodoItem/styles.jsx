import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: auto; */
  justify-content: center;
  align-items: center;
  padding: 20px;

  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 0px 10px;
  background-color: #fff;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: 1px solid #780482;
  color: #000047;

  border-radius: 6px;
  font-family: Quicksand;

  /* Estilos condicionais para tarefas concluídas */
  ${(props) =>
    props.isCompleted &&
    `
    text-decoration: line-through;
    color: #888;
  `}/* Outros estilos comuns ao StyledDiv */
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: center;
  cursor: pointer;
`;

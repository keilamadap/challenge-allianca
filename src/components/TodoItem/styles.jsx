import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 0px 10px;
  background-color: #fff;
  width: 100%;
  height: 40px;
  font-size: 15px;
  border: 1px solid #780482;
  font-weight: 600;
  border-radius: 6px;
  font-family: Quicksand;

  ${(props) =>
    props.isCompleted &&
    `
    text-decoration: line-through;
    text-decoration-color: green;
    text-decoration-thickness: 2px;
    color: #888;
  `}
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: center;
  cursor: pointer;
`;

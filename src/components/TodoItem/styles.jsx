import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  justify-content: center;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  padding: 0px 10px;
  background-color: #fff;
  width: 100%;
  height: 40px;
  font-size: 15px;
  border: 1px solid #780482;
  font-weight: 600;
  border-radius: 4px;
  font-family: Quicksand;

  ${(props) =>
    props.iscompleted &&
    `
    background-color: #98FB98;
    text-decoration: line-through;
    text-decoration-color: green;
    text-decoration-thickness: 2px;
    color: #888;
  `}
`;

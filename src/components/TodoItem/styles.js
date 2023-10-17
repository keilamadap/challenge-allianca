import styled from "styled-components";

export const Container = styled.div`
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
  border-radius: 4px;
  font-family: Quicksand;

  ${(props) =>
    props.$iscompleted &&
    `
    background-color: #98FB98;
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

export const Paragraph = styled.p`
  font-weight: 600;
  justify-content: start;
  display: flex;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;
`;

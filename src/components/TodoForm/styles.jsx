import styled from "styled-components";

export const TodoFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 20px;
  gap: 5px;
`;

export const StyledInput = styled.input`
  padding: 0px 10px;
  background-color: #fff;
  border: 1px solid #780482;
  color: #000047;
  font-size: 18px;
  font-weight: 800;
  font-family: Quicksand;
  outline: none;
  border-radius: 6px;
  height: 40px;
  width: 100%;
`;

export const Paragraph = styled.span`
  font-size: 18px;
  margin-top: -10px;
  font-weight: bold;
  color: red;
`;

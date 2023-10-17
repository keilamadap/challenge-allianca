import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  height: auto;
  align-items: center;
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
  border-radius: 4px;
  height: 40px;
  width: 100%;
`;

export const StyledButton = styled.button`
  border: 2px solid #6e38a1;
  height: 40px;
  border-radius: 4px;
  width: 115px;
  font-family: Quicksand;
  font-size: 12px;
  outline: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  background-color: #914bd4;
  transition: 0.25s;
  -webkit-box-shadow: 5px 7px 5px 0px rgba(173, 173, 173, 1);
  -moz-box-shadow: 5px 7px 5px 0px rgba(173, 173, 173, 1);
  box-shadow: 5px 4px 5px 0px rgba(173, 173, 173, 1);

  &: hover {
    background-color: #61328e;
    border: 2px solid #914bd4;
    color: #fff;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;,
  flex-direction: column;
`;

export const Error = styled.span`
  font-size: 15px;
  color: red;
  margin-top: 10px;
  font-weight: 600;
`;

export const Success = styled.span`
  font-size: 15px;
  color: green;
  margin-top: 10px;
  font-weight: 600;
`;

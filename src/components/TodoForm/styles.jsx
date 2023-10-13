import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 10px 0px 10px 0px;
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

export const StyledMessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -14px;
  padding-bottom: 5px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;,
    flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Error = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  color: red;
  font-weight: 600;
`;

export const Success = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  color: green;
  font-weight: 600;
`;

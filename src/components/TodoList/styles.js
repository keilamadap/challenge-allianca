import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  width: 450px;
  height: 100%;
  align-items: center;
  padding: 20px;
  background-color: #cccccc;
  border-radius: 8px;
  gap: 5px;
  -webkit-box-shadow: 7px 5px 22px -5px rgba(15, 1, 15, 1);
  -moz-box-shadow: 7px 5px 22px -5px rgba(15, 1, 15, 1);
  box-shadow: 7px 5px 22px -5px rgba(15, 1, 15, 1);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  color: #313131;
  width: 100%;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 5px;
  padding: 10px;
  flex-direction: column-reverse;
  font-size: 15px;
  font-weight: 600;
`;

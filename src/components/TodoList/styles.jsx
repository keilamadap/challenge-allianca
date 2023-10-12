import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  /* width: 360px; */
  height: 100%;
  /* gap: 10px; */
  align-items: center;
  padding: 20px;
  background-color: #d2d2d2;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: #313131;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column-reverse;
  font-size: 15px;
  font-weight: 600;
`;

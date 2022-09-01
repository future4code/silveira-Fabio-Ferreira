import styled from "styled-components";

export const Headers = styled.div`
  position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #5c16c5;
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TextHeader = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  color: white;
  padding-top: 3.5px;
  padding-left: 25px;
`;

export const Detail = styled.div`
  width: 65px;
  height: 30px;
  background-color: white;
  margin-top: 11px;
  margin-left: 10px;
  border-radius: 20px;
`;

export const DivText = styled.h1`
  display: flex;
  width: 250px;
  padding-left: 25px;
  cursor: pointer;
  @media (max-width: 450px) {
    width: 250px;
  }
`;

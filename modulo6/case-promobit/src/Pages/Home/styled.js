import styled from "styled-components";

export const Main = styled.div`
  font-family: roboto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SecondHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: purple;
  flex-direction: column;
  height: 50%;
`;

export const DivCards = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  height: 16vh;
  padding: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const DivBotao = styled.div`
  max-width: 1250px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const DivEspaco = styled.div`
  background: #ffab62;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const TextoIntro = styled.p`
  text-align: center;
  max-width: 1250px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 4rem;
  font-style: normal;
  line-height: normal;
  color: white;
`;

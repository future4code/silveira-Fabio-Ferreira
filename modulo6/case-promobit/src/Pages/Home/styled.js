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
  background-color: #2d0c5e;
  flex-direction: column;
  padding-bottom: 6vh;
  padding-top: 5vh;
  @media (max-width: 450px) {
    font-size: 1.5rem;
    padding-bottom: 37vh;
  }
`;

export const DivCards = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding-left: 11vh;
  @media (max-width: 450px) {
    padding-left: 2.5vh;
  }
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
  padding-bottom: 10vh;
  padding-top: 5vh;
  @media (max-width: 450px) {
    font-size: 1.5rem;

    padding-bottom: 2vh;
  }
`;

export const DivPagination = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Films = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

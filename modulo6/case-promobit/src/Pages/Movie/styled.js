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
  flex-direction: row;
  height: 60%;
  color: white;
`;

export const SinopseDiv = styled.div`
  padding-top: 25px;
`;

export const SName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Sinopse = styled.p`
  color: lightgray;
  padding-top: 4px;
  text-align: left;
  max-width: 950px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 1.2rem;
  font-style: normal;
  line-height: normal;
`;

export const ImgStyled = styled.img`
  border-radius: 10px;
  width: 22rem;
  height: 31rem;
`;

export const DivImg = styled.div`
  padding-top: 100px;
  border-radius: 10px;
  width: 22rem;
  height: 35rem;
`;

export const NameFilm = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const DivDetalhes = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActorsDiv = styled.div`
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  div {
    padding: 10px;
  }
`;

export const Avaliacao = styled.div`
  padding-top: 25px;
`;

export const Genre = styled.p`
  padding-left: 15px;
`;

export const DivGenre = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

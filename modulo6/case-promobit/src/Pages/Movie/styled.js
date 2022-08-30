import YouTube from "react-youtube";
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
  max-width: 600px;
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

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ElencoDiv = styled.div`
  display: flex;
  max-width: 1600px;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 6.5rem;
  h2 {
    padding-left: 1.5rem;
  }
`;

export const DivCharacter = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  scroll-padding-right: 10px;
  overflow-x: auto;
  padding-top: 25px;
`;

export const DivTrailer = styled.div`
  display: flex;
  max-width: 1600px;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 7rem;
  h2 {
    padding-left: 1.5rem;
  }
`;

export const CardTrailer = styled(YouTube)`
  padding-top: 2rem;
  padding-left: 1.5rem;
`;

export const DivRecomendations = styled.div`
  display: flex;
  max-width: 1600px;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 7rem;
  h2 {
    padding-left: 1.5rem;
  }
`;

export const DivRec = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  scroll-padding-right: 10px;
  overflow-x: auto;
  padding-top: 25px;
`;

export const Recomendations = styled.div`
  display: flex;
  flex-direction: row;
  width: 16rem;
  height: 22rem;
  justify-content: space-between;
`;

export const DivBlank = styled.div`
  position: static;
  width: 100%;
  height: 15rem;
  background-color: white;
`;

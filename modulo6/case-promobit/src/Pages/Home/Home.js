import React, { useEffect } from "react";
import { BotaoGenero } from "../../Components/BotaoGenero/BotaoGenero";
import { CardMovie } from "../../Components/CardMovie/CardMovie";
import { useGlobal } from "../../Global/GlobalStateContext";
import { DivBotao, DivCards, Main, SecondHeader, TextoIntro } from "./styled";

export const Home = () => {
  const { states, requests } = useGlobal();
  const { movie, genre } = states;
  const { getMovie, getGenre } = requests;

  useEffect(() => {
    getMovie();
    getGenre();
  }, []);

  return (
    <Main>
      <SecondHeader>
        <TextoIntro>
          {" "}
          Milhões de filmes, series e pessoas para descobrir. Explore já{" "}
        </TextoIntro>
        <DivBotao>
          {genre &&
            genre.map((genero) => {
              return <BotaoGenero genero={genero} />;
            })}
        </DivBotao>
      </SecondHeader>
      <DivCards>
        {movie &&
          movie.map((item) => {
            return <CardMovie item={item} />;
          })}
      </DivCards>
    </Main>
  );
};

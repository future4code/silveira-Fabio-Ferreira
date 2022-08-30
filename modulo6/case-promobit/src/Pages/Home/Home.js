import React, { useEffect } from "react";
import { BotaoGenero } from "../../Components/BotaoGenero/BotaoGenero";
import { CardMovie } from "../../Components/CardMovie/CardMovie";
import { Pagination } from "../../Components/Pagination/Pagination";
import { useGlobal } from "../../Global/GlobalStateContext";
import {
  DivBotao,
  DivCards,
  Main,
  SecondHeader,
  TextoIntro,
  Films,
} from "./styled";

export const Home = () => {
  const { states, requests, setters } = useGlobal();
  const { movie, genre, offset, selectedGenre } = states;
  const { getMovie, getGenre } = requests;
  const { setOffset, setSelectedGenre } = setters;

  const LIMIT = 12;

  useEffect(() => {
    getMovie();
    getGenre();
  }, []);

  useEffect(() => {
    getMovie();
  }, [offset, selectedGenre]);

  console.log("aqwui", selectedGenre);
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
              return (
                <BotaoGenero
                  key={genero.id}
                  genero={genero}
                  setSelectedGenre={setSelectedGenre}
                  selectedGenre={selectedGenre}
                />
              );
            })}
        </DivBotao>
      </SecondHeader>
      <Films>
        <DivCards>
          {movie.results &&
            movie.results.map((item) => {
              return <CardMovie key={item.id} item={item} />;
            })}
          {movie.total_results && (
            <Pagination
              limit={LIMIT}
              total={movie.total_results}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </DivCards>
      </Films>
    </Main>
  );
};

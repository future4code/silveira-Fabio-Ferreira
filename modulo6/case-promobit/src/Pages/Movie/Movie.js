import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardActor } from "../../Components/CardActors/CardActors";
import { IMAGE_PATH } from "../../Constants/url";
import { useGlobal } from "../../Global/GlobalStateContext";
import {
  ActorsDiv,
  Avaliacao,
  DivDetalhes,
  DivGenre,
  DivImg,
  DivInform,
  Genre,
  ImgStyled,
  Main,
  NameFilm,
  SecondHeader,
  Sinopse,
  SinopseDiv,
  SName,
} from "./styled";

export const Movie = () => {
  const { states, requests } = useGlobal();
  const { selectedMovie, releaseDate, credtsCast, credtsCrew } = states;
  const { getMovieById, getReleaseDate, getCredits } = requests;
  const { id } = useParams();

  useEffect(() => {
    getReleaseDate(id);
    getMovieById(id);
    getCredits(id);
  }, []);

  const date = selectedMovie.release_date;

  let data_brasileira = String(date)
    .split("-")
    .reverse()
    .join("/");

  let dateMovie = String(date).split("-");

  const { results } = releaseDate;

  const mapDate =
    results &&
    results.filter((result) => {
      if (result.iso_3166_1 === "BR") {
        return result.release_dates;
      }
    });

  const leta =
    mapDate &&
    mapDate.map((res) => {
      return res.release_dates;
    });

  const tela =
    leta &&
    leta.map((res) => {
      return res[0].certification;
    });

  const genresMovie =
    selectedMovie.genres &&
    selectedMovie.genres.map((res) => {
      return res.name;
    });

  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-2);
    const textoMinutos = `00${min}`.slice(-2);

    // console.log(min);
    return `${textoHoras}h ${textoMinutos}m`;
  };

  const average = `${selectedMovie.vote_average}` * 10;
  const averagePercentage = `${average}`.slice(0, 2);

  const crews = credtsCrew.slice(0, 6);

  console.log("banana", crews);

  return (
    <Main>
      <SecondHeader>
        <DivImg>
          <ImgStyled src={`${IMAGE_PATH}${selectedMovie.poster_path}`} />
        </DivImg>
        <DivInform>
          <NameFilm>
            {selectedMovie.title}({dateMovie[0]})
          </NameFilm>
          <DivDetalhes>
            <p>{tela}</p>
            <p>{data_brasileira}</p>
            <DivGenre key={id}>
              {genresMovie &&
                genresMovie.map((genre) => {
                  return <Genre>{genre}</Genre>;
                })}
            </DivGenre>
            <p>{converter(selectedMovie.runtime)}</p>
          </DivDetalhes>
          <Avaliacao>{averagePercentage}%</Avaliacao>
          <SinopseDiv>
            <SName>Sinopse</SName>
            <Sinopse>{selectedMovie.overview}</Sinopse>
          </SinopseDiv>
          <ActorsDiv>
            {crews &&
              crews.map((crew) => {
                return (
                  <div>
                    <p>{crew.job}</p>
                    <p>{crew.original_name}</p>
                  </div>
                );
              })}
          </ActorsDiv>
        </DivInform>
      </SecondHeader>
      <div>
        <div>
          <h4>Elenco original</h4>
          <CardActor />
        </div>
        <div>
          <h4>Trailer</h4>
          <div>trailer video</div>
        </div>
        <div>
          <h4>Trailer</h4>
          <div>trailer video</div>
        </div>
        <div>
          <h4>recomendações</h4>
          <div>card recomendações</div>
        </div>
      </div>
    </Main>
  );
};

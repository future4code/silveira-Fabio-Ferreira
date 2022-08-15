import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_PATH } from "../../Constants/url";
import { useGlobal } from "../../Global/GlobalStateContext";
import {
  ActorsDiv,
  Avaliacao,
  DivDetalhes,
  DivImg,
  DivInform,
  Generos,
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
  const { selectedMovie, releaseDate } = states;
  const { getMovieById, getReleaseDate } = requests;
  const { id } = useParams();

  useEffect(() => {
    getReleaseDate(id);
    getMovieById(id);
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

  console.log(genresMovie);

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
            <div>
              <Genre>{genresMovie}</Genre>
            </div>
            <p>duração</p>
          </DivDetalhes>
          <Avaliacao>avaliação</Avaliacao>
          <SinopseDiv>
            <SName>Sinopse</SName>
            <Sinopse>{selectedMovie.overview}</Sinopse>
          </SinopseDiv>
          <ActorsDiv>
            <p>actors name</p>
            <p>acror tipe</p>
          </ActorsDiv>
        </DivInform>
      </SecondHeader>
      <div>
        <div>
          <h4>Elenco original</h4>
          <div>acotrs</div>
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

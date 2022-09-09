import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { CardActor } from "../../Components/CardActors/CardActors";
import { CardRecomendation } from "../../Components/CardRecomendation/CardRecomendation";
import { Header } from "../../Components/Header/Header";
import { CircularDeterminate } from "../../Components/IconAverage/IconAverage";
import { ResponsivePlayer } from "../../Components/Player/ResponsivePlayer/ResponsivePlayer";
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
  ElencoDiv,
  SecondDiv,
  DivCharacter,
  DivTrailer,
  CardTrailer,
  DivRecomendations,
  DivRec,
  DivBlank,
  AverageVote,
} from "./styled";

export const Movie = () => {
  const { states, requests } = useGlobal();
  const {
    selectedMovie,
    releaseDate,
    credtsCast,
    credtsCrew,
    videos,
    recomendations,
  } = states;
  const {
    getMovieById,
    getReleaseDate,
    getCredits,
    getVideos,
    getRecomendations,
  } = requests;
  const { id } = useParams();

  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  useEffect(() => {
    getReleaseDate(id);
    getMovieById(id);
    getCredits(id);
    getVideos(id);
    getRecomendations(id);
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
      } else {
        return null;
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
  const cast = credtsCast.slice(0, 10);
  const recomend = recomendations.slice(0, 6);

  const video =
    videos &&
    videos.map((vid) => {
      return vid.key;
    });

  console.log("vamo ve", videos);

  return (
    <Main>
      <Header />
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
          <AverageVote>
            <CircularDeterminate averagePercentage={averagePercentage} />
          </AverageVote>
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
      <SecondDiv>
        <ElencoDiv>
          <h2>Elenco original</h2>
          <DivCharacter>
            {cast &&
              cast.map((item) => {
                return <CardActor item={item} />;
              })}
          </DivCharacter>
        </ElencoDiv>
        <DivTrailer>
          <h2>Trailer</h2>
          <ResponsivePlayer video={video[0]} onProgress={handleWatchComplete} />
        </DivTrailer>
        <DivRecomendations>
          <h2>recomendações</h2>
          <DivRec>
            {recomend &&
              recomend.map((item) => {
                return <CardRecomendation item={item} />;
              })}
          </DivRec>
        </DivRecomendations>
      </SecondDiv>
      <DivBlank>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </DivBlank>
    </Main>
  );
};

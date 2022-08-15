import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_PATH } from "../../Constants/url";
import { useGlobal } from "../../Global/GlobalStateContext";
import { goToMovie } from "../../Routes/coordinator";
import { MainCard, MovieImage } from "./styled";

export const CardMovie = ({ item }) => {
  const navigate = useNavigate();

  const date = item.release_date;

  let data_brasileira = String(date)
    .split("-")
    .reverse()
    .join("/");

  return (
    <MainCard onClick={() => goToMovie(navigate, item.id)}>
      {item.poster_path ? (
        <MovieImage src={`${IMAGE_PATH}${item.poster_path}`} />
      ) : null}
      <div>
        <p>{item.title}</p>
        <p>{data_brasileira}</p>
      </div>
    </MainCard>
  );
};

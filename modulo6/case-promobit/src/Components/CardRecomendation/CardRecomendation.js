import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IMAGE_PATH } from "../../Constants/url";
import { goToMovie } from "../../Routes/coordinator";
import { MainCard, MovieImage } from "./styled";

export const CardRecomendation = ({ item }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const date = item.release_date;

  let data_brasileira = String(date)
    .split("-")
    .reverse()
    .join("/");

  const troca = (aidi) => {
    if (aidi !== id) {
      goToMovie(navigate, item.id);
      window.location.reload(false);
    }
  };

  return (
    <MainCard onClick={() => troca(item.id)}>
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

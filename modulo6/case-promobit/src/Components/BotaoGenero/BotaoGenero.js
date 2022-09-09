import React from "react";
import { ButtonStyle } from "./styled";

export const BotaoGenero = ({ genero, setSelectedGenre, selectedGenre }) => {
  const selectGenre = () => {
    if (genero.id === selectedGenre) {
      setSelectedGenre(undefined);
    } else {
      setSelectedGenre(genero.id);
    }
  };
  return (
    <div>
      <ButtonStyle
        onClick={() => selectGenre()}
        style={{ color: genero.id === selectedGenre ? "lightgray" : "black" }}
      >
        {genero.name}
      </ButtonStyle>
    </div>
  );
};

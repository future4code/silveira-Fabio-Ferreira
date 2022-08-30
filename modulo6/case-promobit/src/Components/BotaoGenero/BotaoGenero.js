import React from "react";
import { ButtonStyle } from "./styled";

export const BotaoGenero = ({ genero }) => {
  return (
    <div>
      <ButtonStyle>{genero.name}</ButtonStyle>
    </div>
  );
};

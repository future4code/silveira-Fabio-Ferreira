import React from "react";
import { goToHome } from "../../Routes/coordinator";
import { Headers, TextHeader, Detail, DivText } from "./styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Headers>
      <DivText onClick={() => goToHome(navigate)}>
        <TextHeader>TMDB</TextHeader>
        <Detail />
      </DivText>
    </Headers>
  );
};

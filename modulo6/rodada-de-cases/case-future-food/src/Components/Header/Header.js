import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ContainerHeader, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";

export const Header = ({ title, back }) => {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      {back && <ArrowBackIosNewIcon onClick={() => goBack(navigate)} />}
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

import React from "react";
import { ContainerHeader, Title } from "./styled";

export const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

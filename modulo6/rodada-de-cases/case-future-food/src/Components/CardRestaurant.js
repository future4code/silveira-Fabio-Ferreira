import React, { useEffect, useState } from "react";
import {
  BoxInformTimePrice,
  ContainerCardRestaurant,
  ImageRestaurant,
  InformTimePrice,
  NameRestaurant,
} from "./styled";

export const CardRestaurant = ({ restaurants }) => {
  return (
    <ContainerCardRestaurant>
      <ImageRestaurant src={restaurants.logoUrl} />
      <NameRestaurant>{restaurants.name}</NameRestaurant>
      <BoxInformTimePrice>
        <InformTimePrice>{restaurants.deliveryTime}</InformTimePrice>
        <InformTimePrice>{restaurants.shipping}</InformTimePrice>
      </BoxInformTimePrice>
    </ContainerCardRestaurant>
  );
};

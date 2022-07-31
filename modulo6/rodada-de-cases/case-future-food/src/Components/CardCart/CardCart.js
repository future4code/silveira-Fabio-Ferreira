import { Button } from "@mui/material";
import React, { useState } from "react";
import { ModalSelectQuantity } from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  BoxInformPriceButton,
  BoxNameQuantity,
  ContainerCardProduct,
  ImageProduct,
  InformButton,
  InformDescription,
  Informprice,
  NameProduct,
} from "./styled";

export const CardCart = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ContainerCardProduct>
      <ImageProduct src={props.photoUrl} />
      <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{props.name}</NameProduct>
          <p>{props.amount}</p>
        </BoxNameQuantity>
        <InformDescription>{props.description}</InformDescription>
        <BoxInformPriceButton>
          <Informprice>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.price)}
          </Informprice>
          <InformButton onClick={() => setShowModal(true)}>
            Remover
          </InformButton>
        </BoxInformPriceButton>
        <ModalSelectQuantity open={showModal} setOpen={setShowModal} />
      </BoxInform>
    </ContainerCardProduct>
  );
};

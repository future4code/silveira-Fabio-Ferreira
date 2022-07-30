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

export const CardProduct = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ContainerCardProduct>
      <ImageProduct src={products.photoUrl} />
      <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{products.name}</NameProduct>
        </BoxNameQuantity>
        <InformDescription>{products.description}</InformDescription>
        <BoxInformPriceButton>
          <Informprice>{`R$ ${products.price}`}</Informprice>
          <InformButton onClick={() => setShowModal(true)}>
            Adicionar
          </InformButton>
        </BoxInformPriceButton>
        <ModalSelectQuantity open={showModal} setOpen={setShowModal} />
      </BoxInform>
    </ContainerCardProduct>
  );
};

import React, { useState } from "react";
import {
  CartConfig,
  CartInfo,
  EmptyCart,
  Form,
  Freight,
  InfoProfile,
  InfoRestaurant,
  Main,
  MainCart,
  Payment,
  Total,
} from "./styled";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import { Header } from "../../Header/Header";
import { CardCart } from "../../Components/CardCart/CardCart";
import { Button } from "@mui/material";

export const Cart = () => {
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });

  const mockData = [
    {
      name: "missoshiru",
      price: 50,
      photoUrl:
        "https://static1.conquistesuavida.com.br/articles//2/11/84/2/@/30430-sopa-de-misso-missoshiru-e-fonte-de-vi-article_block_media-2.jpg",
      amount: 2,
      description: "MissoShiru é uma sopa feita com Tofu e pasta de misso, ",
    },
  ];

  const onChangePayment = (event) => {
    const newCheck = { ...paymentMethod };
    newCheck[event.target.name] = event.target.checked;

    const result = Object.keys(newCheck).filter((pay) => {
      if (newCheck[pay]) {
        return [pay, ...payment];
      }
    });

    setPayment(result);
    setPaymentMethod(newCheck);
  };

  console.log(payment);
  return (
    <Main>
      <Header title="Meu Carrinho" back={true} />
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <p>Nome do restaurante</p>
          <p>Rua do restaurante</p>
          <p>30 - 40 min</p>
        </InfoRestaurant>
        <CartInfo>
          {mockData.length > 0 ? (
            mockData.map((data) => {
              return (
                <CardCart
                  name={data.name}
                  price={data.price}
                  photoUrl={data.photoUrl}
                  amount={data.amount}
                  description={data.description}
                />
              );
            })
          ) : (
            <EmptyCart>Carrinho vazio</EmptyCart>
          )}
        </CartInfo>
        <Payment>
          <Freight>
            Frete{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(6)}
          </Freight>
          <Total>
            <p>SubTotal</p>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(10)}
            </p>
          </Total>
          <h1>Forma de pagamento</h1>
          <hr />
          <Form>
            {Object.keys(paymentMethod).map((key) => {
              const checked = paymentMethod[key];
              return (
                <div key={key}>
                  <input
                    checked={checked}
                    name={key}
                    id={key}
                    type={"checkbox"}
                    onChange={onChangePayment}
                  />
                  <label>{key}</label>
                </div>
              );
            })}
            <Button>Confirmar</Button>
          </Form>
        </Payment>
      </CartConfig>
    </Main>
  );
};

import axios from "axios";
import React from "react";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { Form, InputMaterial, Main, StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";
import { Header } from "../../Components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export const SingupAddress = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitFormAdress = (e) => {
    e.preventDefault();
    console.log(form);
    putAddress();
  };

  const putAddress = async () => {
    await axios
      .put(`${BASE_URL}/address`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Main>
      <Header back={true} />
      <p>Meu endereço</p>
      <Form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="street"
          type={"text"}
          placeholder={"Rua /Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Número"}
          name="number"
          type={"number"}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apto./Bloco"}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />
        <StyledButton type="submit">Salvar</StyledButton>
      </Form>
    </Main>
  );
};

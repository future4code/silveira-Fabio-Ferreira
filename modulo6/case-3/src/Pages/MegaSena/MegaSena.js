import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../Global/GlobalStateContext";
import {
  goToQuina,
  goToMegaSena,
  goToLotoFacil,
  goToLotomania,
  goToTimemania,
  goToDiaDeSorte,
} from "../../Routes/coordinator";
import {
  LeftDiv,
  Main,
  Form,
  Numbers,
  SortNumbers,
  Logo,
  Separador,
  Separador2,
  Clover,
  Clover1,
  Clover2,
  Clover3,
  Text,
  Select,
  DivClover1,
  DivClover2,
  DivClover3,
  DivClover4,
  LogoeNome,
  Adendo,
  NumeroseAdendo,
  Concurso,
  IdEData,
} from "./styled";

export const MegaSena = () => {
  const { requests, states } = useGlobal();
  const { GetRaffle, GetMegaSena } = requests;
  const { MegaSena, raffle } = states;

  const navigate = useNavigate();

  useEffect(() => {
    GetRaffle();
    GetMegaSena();
  }, []);

  const dataSorteio = MegaSena.data || "";

  const data = dataSorteio.substr(0, 10);

  let data_brasileira = data.split("-").reverse().join("/");

  console.log("vrau", raffle);

  const mudaPagina = (e) => {
    if (e.target.value === "Quina") {
      goToQuina(navigate);
    } else if (e.target.value === "Mega-Sena") {
      goToMegaSena(navigate);
    } else if (e.target.value === "Loto facil") {
      goToLotoFacil(navigate);
    } else if (e.target.value === "Lotomania") {
      goToLotomania(navigate);
    } else if (e.target.value === "Timemania") {
      goToTimemania(navigate);
    } else if (e.target.value === "Dia de sorte") {
      goToDiaDeSorte(navigate);
    }
  };

  const Numeros = MegaSena.numeros;

  return (
    <Main>
      <LeftDiv>
        <Form onChange={mudaPagina}>
          <Select>
            <option>Mega-Sena</option>
            <option>Quina</option>
            <option>Dia de sorte</option>
            <option>Loto facil</option>
            <option>Lotomania</option>
            <option>Timemania</option>
          </Select>
          <LogoeNome>
            <Logo>
              <Separador>
                <DivClover1>
                  <Clover1 />
                </DivClover1>
                <DivClover2>
                  <Clover />
                </DivClover2>
              </Separador>
              <Separador2>
                <DivClover3>
                  <Clover3 />
                </DivClover3>
                <DivClover4>
                  <Clover2 />
                </DivClover4>
              </Separador2>
            </Logo>
            <Text>MEGA-SENA</Text>
          </LogoeNome>
          <Concurso>
            <p>concurso n°</p>
            <IdEData>
              <p>{MegaSena.id} </p>
              <p> - {data_brasileira}</p>
            </IdEData>
          </Concurso>
        </Form>
        <NumeroseAdendo>
          <Numbers>
            {Numeros &&
              Numeros.map((item) => {
                return <SortNumbers>{item}</SortNumbers>;
              })}
          </Numbers>
          <Adendo>
            Este sorteio é meramente ilustrativo e não possui nenhum ligação com
            a CAIXA.
          </Adendo>
        </NumeroseAdendo>
      </LeftDiv>
    </Main>
  );
};

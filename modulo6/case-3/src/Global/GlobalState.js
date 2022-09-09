import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../Constants/url";
import axios from "axios";

export const GlobalState = ({ children }) => {
  const [raffle, setRaffle] = useState([]);
  const [RaffleConcourse, setRaffleConcourse] = useState([]);
  const [concourse, setConcourse] = useState({});
  const [MegaSena, setMegaSena] = useState({});
  const [Quina, setQuina] = useState({});
  const [DiaDeSorte, setDiaDeSorte] = useState({});
  const [LotoFacil, setLotoFacil] = useState({});
  const [Lotomania, setLotomania] = useState({});
  const [Timemania, setTimemania] = useState({});

  const GetRaffle = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        // console.log("Raffle", res.data);
        setRaffle(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetRaffleConcourse = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        // console.log("raffleConcourse", res.data);
        setRaffleConcourse(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetMegaSena = () => {
    axios
      .get(`${BASE_URL}/concursos/2359`)
      .then((res) => {
        // console.log("Mega Sena", res.data);
        setMegaSena(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetQuina = () => {
    axios
      .get(`${BASE_URL}/concursos/5534`)
      .then((res) => {
        console.log("Quina", res.data);
        setQuina(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetLotoFacil = () => {
    axios
      .get(`${BASE_URL}/concursos/2200`)
      .then((res) => {
        console.log("Lotofacil", res.data);
        setLotoFacil(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetLotomania = () => {
    axios
      .get(`${BASE_URL}/concursos/2167`)
      .then((res) => {
        console.log("Lotomania", res.data);
        setLotomania(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetTimemania = () => {
    axios
      .get(`${BASE_URL}/concursos/1622`)
      .then((res) => {
        console.log("Timemania", res.data);
        setTimemania(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const GetDiaDeSorte = () => {
    axios
      .get(`${BASE_URL}/concursos/440`)
      .then((res) => {
        console.log("DiaDeSorte", res.data);
        setDiaDeSorte(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const requests = {
    GetRaffle,
    GetRaffleConcourse,
    GetMegaSena,
    GetQuina,
    GetLotoFacil,
    GetLotomania,
    GetTimemania,
    GetDiaDeSorte,
  };
  const states = {
    raffle,
    RaffleConcourse,
    concourse,
    MegaSena,
    Quina,
    DiaDeSorte,
    LotoFacil,
    Lotomania,
    Timemania,
  };
  const setters = {
    setRaffle,
    setRaffleConcourse,
    setConcourse,
    setMegaSena,
    setQuina,
    setDiaDeSorte,
    setLotoFacil,
    setLotomania,
    setTimemania,
  };

  return (
    <GlobalStateContext.Provider value={{ requests, states, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

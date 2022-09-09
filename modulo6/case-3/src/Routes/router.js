import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { MegaSena } from "../Pages/MegaSena/MegaSena";
import { Quina } from "../Pages/Quina/Quina";
import { LotoFacil } from "../Pages/LotoFacil/LotoFacil";
import { Lotomania } from "../Pages/Lotomania/Lotomania";
import { Timemania } from "../Pages/Timemania/Timemania";
import { DiaDeSorte } from "../Pages/DiaDeSorte/DiaDeSorte";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
        <Route path="/Quina" element={<Quina />} />
        <Route path="/Loto-facil" element={<LotoFacil />} />
        <Route path="/Lotomania" element={<Lotomania />} />
        <Route path="/Timemania" element={<Timemania />} />
        <Route path="/Dia-de-sorte" element={<DiaDeSorte />} />
      </Routes>
    </BrowserRouter>
  );
};

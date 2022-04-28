import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminHome = () => {
  const navigate = useNavigate()

  const criarViagem = () => {
    navigate('/CreateTrip')
  }

  const detalhes = () => {
    navigate('/TripDetails')
  }

  return (
    <div>
      <button onClick={criarViagem} >create trip</button>
      <button onClick={detalhes} >trip detail</button>
    </div>
  );
}

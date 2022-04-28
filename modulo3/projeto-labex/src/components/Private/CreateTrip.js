import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateTrip = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const createTrip = () => {
    navigate(-1)
  }
  return (
    <div>
      <button onClick={goBack} >voltar</button>
      <button onClick={createTrip} >Criar viagem</button>
    </div>
  );
}

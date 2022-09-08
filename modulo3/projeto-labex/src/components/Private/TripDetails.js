import React from "react";
import { useNavigate } from "react-router-dom";

export const TripDetails = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goBack} >voltar</button>
    </div>
  );
}

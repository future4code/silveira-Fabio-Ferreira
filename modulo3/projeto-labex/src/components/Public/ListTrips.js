import React from "react";
import {useNavigate} from 'react-router-dom'

export const ListTrips = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const subscribe = () => {
    navigate('/ApplicationForm')
  }
  return (
    <div>
      <button onClick={goBack} >voltar</button>
      <button onClick={subscribe} >inscrever-se</button>
    </div>
  );
}

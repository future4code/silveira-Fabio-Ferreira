import React from "react";
import {useNavigate} from 'react-router-dom'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const enviar = () => {
    navigate('/AdminHome')
  }

  return (
    <div>
      <button onClick={goBack} >voltar</button>
      <button onClick={enviar} >enviar</button>
    </div>
  );
}

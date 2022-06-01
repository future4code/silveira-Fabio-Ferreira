import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  }


  const goBack = () => {
    navigate(-1)
  }

  const Login = () => {
    navigate('/AdminHome')
  }
  return (
    <div>
      <input 
      placeholder="Email"
      type="Email"
      value={email}
      onChange={onChangeEmail}
       />
      <input
       placeholder="senha"
       type="password"
       value={senha}
       onChange={onChangeSenha}
       />
      <button onClick={goBack} >voltar</button>
      <button onClick={Login} >Login</button>
    </div>
  );
}
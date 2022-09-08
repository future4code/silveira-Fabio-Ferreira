import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";

export const Login = () => {
  const navigate = useNavigate()
  const logar = useLogin()

  

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  }

  const onSubmitLogin = (logar) => {
    const body ={
      email: email,
      password: senha
    }
    const [login] = ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/login', body)
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
      <button onClick={onSubmitLogin} >Login</button>
    </div>
  );
}
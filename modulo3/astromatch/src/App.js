import React, {useState} from "react";
import PaginaInicial from './components/PaginaInicial'
import TelaMatches from './components/TelaMatches'
import style from 'styled-components'

function App() {

const [Tela, setTela] = useState('TelaInicial')

const selectMatch = () => {
  setTela('TelaInicial')
}

const telaMatch = () => {
  setTela('TelaMatches')
}

const mudarTela = () => {
  switch (Tela) {
  case 'TelaInicial':
    return <PaginaInicial telaMatch={telaMatch}/>
  case 'TelaMatches':
    return <TelaMatches selectMatch={selectMatch}/>
  default:
    <PaginaInicial/>
}};


  return (
    <div>
      {mudarTela()}
    </div>
  );
}

export default App;

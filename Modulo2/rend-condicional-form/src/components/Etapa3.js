import React from "react"

export default class Etapa3 extends React.Component{
  render(){
    return (
        <div className="Etapa3">
        <header className="Etapa3-header">
      <h2>Etapa 3 - Informações Gerais De Ensino</h2>
          
            <li>Por que você não terminou um curso de graduação?</li>
            <input/>
            <li>Você fez algum curso complementar?</li>
            <select onChange = {this.mostrarOpçaoSelect}>
                <option value = {"Nenhum"}>Nenhum</option>
                <option value = {"Curso técnico"}>Curso técnico</option>
                <option value = {"Curso de inglês"}>Curso de inglês</option>

            </select>
          
           
        </header>
      </div>
    );
  }
}
import React from "react"

export default class Etapa1 extends React.Component{
  render(){
    return (
        

        <div className="Etapa1">
        <header className="Etapa1-header">
      <h2>Etapa 1 - Dados Gerais</h2>
      
            <li>Qual o seu nome?</li>
            <input/>
            <li>Qual sua idade?</li>
            <input/>
            <li>Qual seu email?</li>
            <input/>
            <li>Qual a sua escolaridade?</li>

            <select onChange = {this.mostrarOpçaoSelect}>
                <option value = {"Ensino Médio Incompleto"}>Ensino Médio Incompleto</option>
                <option value = {"Ensino Médio Completo"}>Ensino Médio Completo</option>
                <option value = {"Ensino Superior Incompleto"}>Ensino Superior Incompleto</option>
                <option value = {"Ensino Superior Completo"}>Ensino Superior Completo</option>

            </select>
          
           
         
        </header>
      </div>
    );
  }
}
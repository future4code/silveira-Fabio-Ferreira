import React from "react";
import TelaCadastro from './components/TelaCadastro'
import TelaUsuario from "./components/TelaUsuario"

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  mudarTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irListaUsuario} />
      case "lista":
        return <TelaUsuario irCadastro={this.irCadastro} />
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  irCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irListaUsuario = () => {
    this.setState({telaAtual: "lista"})
  }
  
  render(){
    return (

      <div>
        {this.mudarTela()}
      </div>
 
    );
    
  }
}

export default App;

import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaDePlaylist from "./components/ListaDePlaylist";

class App extends React.Component{
  state = {
    telaAtual: "CriarPlaylist"
  }

  mudarTela = () => {
    switch (this.state.telaAtual){
      case "CriarPlaylist":
        return <CriarPlaylist irCriacao={this.irCriacao} />
      case "ListaDePlaylist":
        return <ListaDePlaylist irParaPlaylists={this.irParaPlaylists} />
      default:
        return <div>Ops, algo deu errado!</div>
    }
  }

  irCriacao = () => {
    this.setState({telaAtual: "CriarPlaylist"})
  }

  irParaPlaylists = () => {
    this.setState({telaAtual: "ListaDePlaylist"})
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

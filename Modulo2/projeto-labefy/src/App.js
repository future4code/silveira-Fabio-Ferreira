import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaDePlaylist from "./components/ListaDePlaylist";

class App extends React.Component{
  state = {
    telaAtual: "CriarPlaylist"
  }
//função que muda a tela baseado no state
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
//muda para o menu de criação
  irCriacao = () => {
    this.setState({telaAtual: "CriarPlaylist"})
  }
//muda para playlists
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

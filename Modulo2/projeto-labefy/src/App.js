import React from "react";
import Playlists from "./components/Playlists";
import InfosPlaylists from "./components/InfosPlaylists";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`


class App extends React.Component {
  state = {
    telaAtual: "Playlists"
  }

  mudarTela = () => {
    switch (this.state.telaAtual){
      case "Playlists":
        return <Playlists irInfos={this.irInfos} />
      case "infos":
        return <InfosPlaylists irPlaylists={this.irPlaylists} />
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  irPlaylists = () => {
    this.setState({telaAtual: "Playlists"})
  }

  irInfos = () => {
    this.setState({telaAtual: "infos"})
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
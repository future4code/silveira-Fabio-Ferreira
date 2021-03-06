import React from "react";
import MeuChat from './components/MeuChat/Meuchat';

class App extends React.Component {
  state = {
    pessoa: [{}],

    remetente: "",
    conteudo: "",
  };

  EnviarComEnter = (e) => {
    if (e.key === "Enter") {
      this.adicionaMensagem();
    }
  };

  adicionaMensagem = () => {

    const novaMensagem = {
      remetente: `${this.state.remetente}:`,
      conteudo: this.state.conteudo,
    };

    const novaMsg = [novaMensagem, ...this.state.pessoa];

    this.setState({ pessoa: novaMsg });
    this.setState({ conteudo: "" });

  };

  onChangeInputMsg = (event) => {
    this.setState({
      conteudo: event.target.value,
    });
  };

  onChangeInputRem = (event) => {
    this.setState({
      remetente: event.target.value,
    });
  };
    


  render() {


    const MensagemRenderizada = this.state.pessoa.map((msg) => {
      if (msg.remetente === "" || msg.remetente === ":" || msg.conteudo === "") {
      } else {
        return (
          <p>
            <b>{msg.remetente}</b> {msg.conteudo}
          </p>
        );
      }
    });

    return (
      <>
        <MeuChat
          clickBotao={this.adicionaMensagem}
          inputMsg={this.onChangeInputMsg}
          inputRem={this.onChangeInputRem}
          valorRem={this.state.remetente}
          valorMsg={this.state.conteudo}
          msgRender={MensagemRenderizada}
          onKeyPress={this.EnviarComEnter}
        />
      </>
    );
  }
}

export default App;
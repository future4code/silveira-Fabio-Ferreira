import React from "react";
import Styled from "styled-components";
import imagemSeta from '../../img/seta.png';

const DivGeral = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: darkgray;
`;

const QuadradoCentro = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 80%;
  margin-top: 40px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: gray;
`;

const InputChat = Styled.input`
  display: flex;
  height: 50%;
  margin: 0 5px; 
  border: 2px solid gray;
  border-radius: 5pt;
`;

const DivDosInputs = Styled.div`
  display: flex;
  width: 100%;
  height: 8%;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 10px;
`;

const BotaoEnviar = Styled.img`
   width: 5%;
   margin: 0 5px;
`;

const Conteudos = Styled.div`
 display: flex;
 flex-direction: column-reverse;
 width: 80%;
 height: 100%;
 margin: 2% 10% 0 10%;
 box-shadow: 1px 1px 5px black;
 padding: 2%;
 background-color: lightgray;
 border-radius: 20px;
`

const Titulo = Styled.h1`
  padding: 0;
  margin: 0;
  color: lightRed;
`



class MeuChat extends React.Component {
  render() {

    return (
      <DivGeral>
        <QuadradoCentro>
            <Titulo>WhatsLab</Titulo>
          <Conteudos>{this.props.msgRender}</Conteudos>
          <DivDosInputs>
            <InputChat
              className="input-pequeno"
              type="text"
              placeholder="Usuario"
              value={this.props.valorRem}
              onChange={this.props.inputRem}
            />
            <InputChat
              className="input-maior"
              type="text"
              placeholder="Mensagem"
              value={this.props.valorMsg}
              onChange={this.props.inputMsg}
              onKeyPress={this.props.onKeyPress}
            />

            <BotaoEnviar src={imagemSeta} onClick={this.props.clickBotao} />

          </DivDosInputs>
        </QuadradoCentro>
      </DivGeral>
    );
  }
}

export default MeuChat;
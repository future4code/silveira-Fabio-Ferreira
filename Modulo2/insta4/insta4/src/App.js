import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Post from './components/Post/Post';

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {

  state = {
    pessoas: [
      {  
        nomeUsuario: 'zoro',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'Luffy',
        fotoUsuario:'https://picsum.photos/200/300',
        fotoPost:'https://picsum.photos/200'
      },

      {
      nomeUsuario: 'Joyboy',
      fotoUsuario: 'https://picsum.photos/id/237/200/300',
      fotoPost: 'https://picsum.photos/seed/picsum/200'
      }
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost:""
  
  }

  adicionaPessoa =  () => {
    const novaPessoa = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    };

    console.log(novaPessoa);

    const novaLista = [novaPessoa, ...this.state.pessoas];

    this.setState({pessoas: novaLista});

    console.log(this.state.pessoas);
    console.log(novaPessoa);

    this.setState({nomeUsuario:"", fotoUsuario: "", fotoPost: ""});

  };

    onChangeNome = (e) => {

      this.setState({nomeUsuario: e.target.value});
    
    };

    onChangeFoto = (e) => {

      this.setState({fotoUsuario: e.target.value});
    
    };

    onChangePost = (e) => {

      this.setState({fotoPost: e.target.value});
    
    };
  
  
  render() {

    const NovoPost = this.state.pessoas.map((pessoa) => {
      return (
        <MainContainer>
          <Post 
          nomeUsuario = {pessoa.nomeUsuario}
          fotoUsuario = {pessoa.fotoUsuario}
          fotoPost = {pessoa.fotoPost}
          />
  
        </MainContainer>
      );

    });
    return(
        <div>
          <MainContainer>
            <h2>Criar novo post</h2>
            Nome:<input type='text'
            value={this.state.nomeUsuario}
            onChange={this.onChangeNome}
            placeholder={'Nome'} />

            sua Foto:<input type='text'
            value={this.state.fotoUsuario}
            onChange={this.onChangeFoto}
            placeholder={'Foto'} />

            Foto do Post: <input type='text'
            value={this.state.fotoPost}
            onChange={this.onChangePost}
            placeholder={'Foto do Post'} />

            <br />

            <button onClick = {this.adicionaPessoa}>Enviar</button>
          </MainContainer>

          {NovoPost}
        </div>
    )
  
  }
  

}


export default App;

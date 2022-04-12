import axios from "axios";
import React from "react";
import styled from "styled-components"

const Titulo = styled.h2`
    font-size: 2rem;
    color: lightcoral
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    margin-top: 10px;
`

const InputBonito = styled.input`
    width: 250px;
    padding: 8px;
    margin: 10px;
`
const BotaoBonito = styled.button`
    height: 45px;
    width: 150px;

`

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    cadastroNome = (e) => {
        this.setState({nome: e.target.value})
    }

    cadastroEmail = (e) => {
        this.setState({email: e.target.value})
    }    

    cadastrarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }


        axios
        .post(url, body, {
            headers:{
            Authorization: "Fabio-Ferreira-Silveira"
        }
        })
        .then((res) => {
            alert("cadastro feito com sucesso!")
            this.setState({nome:"", email:""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
        console.log(this.state)
    }

    render(){
        return(
            <Container>
                <BotaoBonito onClick={this.props.irParaLista}>Ir para lista de Usuários</BotaoBonito>
                <Titulo>TelaCadastro</Titulo>
                <InputBonito
                placeholder="nome"
                value={this.state.nome}
                onChange={this.cadastroNome}
                />
                <InputBonito
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.cadastroEmail}
                />
                <button onClick={this.cadastrarUsuario}>cadastrar</button>
            </Container>
        )
    }
}
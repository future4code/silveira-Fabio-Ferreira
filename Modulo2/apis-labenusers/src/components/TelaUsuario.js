import React from "react";
import axios from "axios";
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

const DivUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    border: 2px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    :hover{
        background-color: lightgray;
    }
    :active{
        background-color: darkgray;
    }
`
const BotaoDelete = styled.button`
    border-radius: 5px;
    :hover{
        cursor: pointer;
        transform:perspective();
    }
`
const BotaoBonito = styled.button`
    height: 45px;
    width: 150px;
`

export default class TelaUsuario extends React.Component{
    state = {
        listaDeUsuarios: []
    }

    componentDidMount() {
        this.getUsuarios()
    }

    getUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        axios.get(url,{
            headers:{
                Authorization: "Fabio-Ferreira-Silveira"
            }
        })
        .then((res) => {
            this.setState({listaDeUsuarios: res.data})
        })
        .catch((err) => {
            alert("Ops, algo deu errado! Tente novamente mais tarde")
        })
    }

    deleteUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "Fabio-Ferreira-Silveira"
            }
        }).then((res) => {
            alert("Usuario deletado!")
            this.getUsuarios()
        }).catch((err) => {
            alert("Algo deu errado, tente novamente mais tarde!")
        })
    }


    render(){
        const listaUsuarios = this.state.listaDeUsuarios.map((user) =>{
            return <DivUsuario key={user.id}>{user.name}
            <BotaoDelete onClick={() => this.deleteUsuario (user.id)}>x</BotaoDelete>
            </DivUsuario>
        })


        return(
            <Container>
                <BotaoBonito onClick={this.props.irCadastro}>Ir para tela de cadastro</BotaoBonito>
                <Titulo>Lista de Usuários</Titulo>
                {listaUsuarios}
            </Container>
        )
    }
}
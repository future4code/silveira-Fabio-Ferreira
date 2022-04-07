import axios from "axios";
import React from "react";

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
            name: this.cadastroNome,
            email: this.cadastroEmail
        }


        axios
        .post(url, body, {
            headers:{
            Authorization: "Fabio-Matheus-Silveira"
        }
        })
        .then((res) => {
            alert("cadastro feito com sucesso!")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de Usuários</button>
                <h2>TelaCadastro</h2>
                <input
                placeholder="nome"
                value={this.state.name}
                onChange={this.cadastroNome}
                />
                <input
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.cadastroEmail}
                />
                <button onClick={this.cadastrarUsuario}>cadastrar</button>
            </div>
        )
    }
}
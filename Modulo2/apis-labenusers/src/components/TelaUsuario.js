import React from "react";

export default class TelaUsuario extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.irCadastro}>Ir para tela de cadastro</button>
                <h2>telaUsuario</h2>
            </div>
        )
    }
}
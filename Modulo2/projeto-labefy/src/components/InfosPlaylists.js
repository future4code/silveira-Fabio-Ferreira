import axios from "axios";
import React from "react";

export default class ListaDePlaylist extends React.Component{
    state={
        NomeDaPlaylist: "",
        Playlists: [],
        idPlaylist: "",
    }

    onChangeNomeDaPlaylist = (e) => {
        this.setState({NomeDaPlaylist: e.target.value})
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.NomeDaPlaylist
        }
        const headers = {
            headers: {
              Authorization: "Fabio-Ferreira-Silveira",
            },
          };
        axios
        .post(url, body, headers)
        .then((res) => {
            alert("Playlist Criada com sucesso!");
            this.setState({NomeDaPlaylist: ""});
            this.PegarTodasPlaylists();
        })
        .catch((err) => {
            alert("Algo deu errado, tente novamente.")
        })
          
    };

    PegarTodasPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "Fabio-Ferreira-Silveira"
            }
        };
        axios
        .get(url, headers)
        .then((res) => {
            this.setState({Playlists: res.data.result.list});
        })
        .catch((err) => {
            alert(err.response);
        });
    };



    render(){
        return(
            <div>
                <h2>ListaDePlaylist</h2>
                <button onClick={this.props.irPlaylists}>ir para Criar Playlist</button>
                <input
                placeholder="Nome da Playlist"
                value={this.state.NomeDaPlaylist}
                onChange={this.onChangeNomeDaPlaylist}
                />
            </div>
        )
    }
}
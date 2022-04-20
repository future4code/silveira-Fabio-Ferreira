import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        justify-content: center;
        margin:0;
        padding:0;
        box-sizing: border-box;
        background-color: #808080;
        padding-top:50px;
    }
`

let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    border-color: #8a2be2;
    border-radius: 8px;
    height: 600px;
    width: 400px;
    background-color: #8a2be2;
`

let Foto = styled.img`
    width: 90%;
    height: 70%;
    border: solid;
`

const PaginaInicial = (props) => {

const [perfil, setPerfil] = useState([])
const [match, setMatch] = useState(false)

const pegarTodosMatches = () => {
    axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:fabio/person'
        )
        .then((res) => {
            setPerfil(res.data.profile)
        })
        .catch((err) => {
            alert('algo de errado não está certo 🤔')
        })
}

useEffect(() => {
    pegarTodosMatches();
}, [])

const escolheMatch = () => {
    const body = {        
            "id": perfil.id,
            "choice": true        
    }

    axios
    .post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person',
         body)
    .then((res)=>{
        console.log('bananinha')
    })
    .catch((err)=>{
        console.log('algo de errado n esta certo')
    })
}

    return(
        <Container>
            <button onClick={props.telaMatch} >matches</button>
            <h2>titulo 🥰</h2>
            <Foto src={perfil.photo} />
            <h2>{perfil.name}</h2>
            <p>{perfil.age}</p>
            <p>{perfil.bio}</p>
            <button>refuse</button>
            <button onClick={() => escolheMatch()}>agree</button>
            <GlobalStyle/>
        </Container>
    )
}

export default PaginaInicial;
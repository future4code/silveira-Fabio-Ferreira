import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import {FaHeartBroken} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'

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


const Container = styled.div`
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


const Foto = styled.img`
    width: 350px;
    height: 400px;
    border-radius: 8px;
`



const Pessoa = styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 15px;
    z-index: 2;
    h2{
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    }
    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
`


const Card = styled.div`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 400px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const DivBotaoEscolha = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button.aceita{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        color: #FF6347;
        border: #FF6347;
        :hover{
            transform:scale(1.3);
            transition-property: all;
            transition-duration: 0.6;
            transition-timing-function: ease;
            color: white;
            background-color: #FF6347;
            box-shadow: #FFEFD5;
            cursor: pointer;
        }
        position: relative;
        :active{
            transform: scale(1.1);
            transition: all 0.2 ease;
        }
    }
    button.recusa{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        color: black;
        border: black;
        :hover{
            transform:scale(1.3);
            transition-property: all;
            transition-duration: 0.6;
            transition-timing-function: ease;
            color: white;
            background-color: black;
            box-shadow: #FFEFD5;
            cursor: pointer;
        }
        position: relative;
        :active{
            transform: scale(1.1);
            transition: all 0.2 ease;
        }
    }
`

const Logo = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 15px 0px;
    img{
        height:80%
    }
    button{
        width: 60px;
        height: 60px;
        border-radius: 10%;
        color: #EE82EE;
        border: #EE82EE;
        :hover{
            transform:scale(1.2);
            transition-property: all;
            transition-duration: 0.6;
            transition-timing-function: ease;
            color: white;
            background-color: #EE82EE;
            box-shadow: #FFEFD5;
            cursor: pointer;
        }
    }
`


const PaginaInicial = (props) => {

const [perfil, setPerfil] = useState([])
const [match, setMatch] = useState(false)



const pegarTodosMatches = () => {
    axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/person'
        )
        .then((res) => {
            setPerfil(res.data.profile)
        })
        .catch((err) => {
            console.log('algo de errado não está certo 🤔')
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
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/choose-person',
         body)
    .then((res)=>{
        console.log('tudo certo')
        setMatch(res.data);
        pegarTodosMatches();
    })
    .catch((err)=>{
        console.log('algo de errado n esta certo')
    })
}

    return(
        <Container>
            <Logo>
                <button onClick={props.telaMatch} ><BsPeopleFill /></button>
                <img src={'http://astro-match.com/images/logo_small.png'} />
            </Logo>
            <Card>
                <Foto src={perfil.photo} />
                <Pessoa>
                    <h4>{perfil.name}</h4>
                    <p>{perfil.age}</p>
                    <p>{perfil.bio}</p>
                </Pessoa>
            </Card>
            <DivBotaoEscolha>
                <button className="recusa" onClick={() => pegarTodosMatches()}><FaHeartBroken /></button>
                <button className="aceita" onClick={() => escolheMatch()}><FaHeart /></button>
            </DivBotaoEscolha>
            <GlobalStyle/>
        </Container>
    )
}

export default PaginaInicial;
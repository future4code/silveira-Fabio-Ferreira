import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import axios from "axios";
import { createGlobalStyle } from 'styled-components';
import MatchesList from './MatchesList'
import {FaTrashAlt} from 'react-icons/fa'


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
        color: black;
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

const BotaoDelete = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    border: brown;
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
        :active{
            transform: scale(1.1);
            transition: all 0.2 ease;
        }
    position: relative;
`


const TelaMatches = (props) => {

const [matchesEscolhidos, setMatchesEscolhidos] = useState ([]);



useEffect(()=>{
    axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/matches'
        )
    .then((res)=>{
        console.log('deu certo')
        setMatchesEscolhidos(res.data.matches)
    })
    .catch((err)=>{        
        console.log('deu errado')
    })
}, [])

const apagaGeral = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/clear')
    .then(()=>{
        alert('sua lista foi apagada 😆')
    })
    .catch(()=>{
        alert('to entendendo nada 🥴')
    })
}

    return(
        <Container>
            <Logo>
                <button onClick={props.selectMatch}>Tela Inicial</button>
                <img src={'http://astro-match.com/images/logo_small.png'} />
            </Logo>  
                        
                  {matchesEscolhidos.map((perfil) => {
                      return <MatchesList perfil={perfil} />
                  })}            
                    
            <BotaoDelete onClick={apagaGeral}><FaTrashAlt /></BotaoDelete>
            <GlobalStyle/>
        </Container>
    )
}

export default TelaMatches;
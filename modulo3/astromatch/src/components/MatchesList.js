import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
        :hover{
            transform:scale(1.02);
            transition-property: all;
            transition-duration: 0.6;
            transition-timing-function: ease;
            cursor: pointer;
        }
    
`
const Foto = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const Nome = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding-left: 20px;
`


const MatchesList = (props) => {
    return(
        <Container>
            <Foto src={props.perfil.photo} />
            <Nome>{props.perfil.name}</Nome>
        </Container>
    )
}

export default MatchesList
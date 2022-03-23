import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <img src={ props.icon } />
            <div>
                <h4>{ props.name }</h4>
            </div>
            <div>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
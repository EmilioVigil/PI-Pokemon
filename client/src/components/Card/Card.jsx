import React from "react";
import { Link } from "react-router-dom";
import { CardContainer , CardPokemon } from './CardStyle.js';


export default function PokeCard(props){
    return(
        <CardContainer >
            <img src={props.image} alt="img not found" width="200px" height="250px" />
            
            <CardPokemon >
                <h3> {props.name} </h3>
                <p> Types: {props.tipos} </p>
                <p> Attack: {props.attack} </p>
                <Link to={`/pokemon/${props.id}`} > <button>DETALLE</button></Link>
            </CardPokemon>

        </CardContainer>
    )
}
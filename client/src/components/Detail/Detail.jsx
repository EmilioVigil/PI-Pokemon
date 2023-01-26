import React from 'react';
import { connect } from 'react-redux';
import {  pokemonDetail , clearDetail } from '../../actions';
import { Link } from "react-router-dom";


import { CardContainer , CardPokemon } from './DetailStyle.js'

export class PokDetail extends React.Component{
    
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.pokemonDetail(id)
    }

    componentWillUnmount(){
        this.props.clearDetail()
    }

    render(){
        return(
            <CardContainer >

                <CardPokemon >
                    <h1>Detalle Pokemon</h1>
                    <h3> {this.props.detail.name} </h3>
                    <img src={this.props.detail.img} alt='No hay imagen'/>
                    <p>Tipo: {this.props.detail.tipo} </p>
                    <p>Attack: {this.props.detail.ataque} </p>
                    <p>Defense: {this.props.detail.defense} </p>
                    <p>Height {this.props.detail.altura} </p>
                    <p>Speed: {this.props.detail.velocidad} </p>
                    <p>Weigth {this.props.detail.peso} </p>
                    <p>Hp: {this.props.detail.hp} </p>
                    
                    <Link to="/home"  > <button  >Volver</button> </Link>     
                </CardPokemon>
                
            </CardContainer>
        )
    }
}



function mapStateToProps(state){
    return {
        detail : state.detailPokemon
    }
}

function mapDispatchToProps(dispatch){
    return{
        pokemonDetail : (id) => dispatch(pokemonDetail(id)),
        clearDetail : ()=> dispatch(clearDetail())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(PokDetail);





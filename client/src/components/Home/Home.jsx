import React from "react";
import {  useEffect , useState} from 'react';
import { useDispatch , useSelector } from "react-redux";
import { getPokemon , filterPokemonType , filterCreatedApi  , orderName , orderAttack  } from "../../actions";
import { Link } from "react-router-dom";

import Card from '../Card/Card.jsx'
import Paginado from "../Paginado/Paginado.jsx";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Loading from '../Loading/Loading.jsx'

// Estilos
import { MainConteiner , Button ,  ButtonExit , FilterAndOrd , CardPokemon ,CardContainer } from './HomeStyle.js'


export default function Home(){

    const dispatch = useDispatch()
    const allPokemones = useSelector( (state)=> state.pokemones)

    // Estados
    const [orden , setOrden] = useState('');
    const [currentPage , setCurrentPage] = useState(1)
    const [pokemonesPage , setPokemonesPage] = useState(12)


    const indexOfLastPokemon = currentPage * pokemonesPage  
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonesPage;
    
    const currentPokemones = allPokemones.slice(indexOfFirstPokemon , indexOfLastPokemon)


    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }



    useEffect( ()=>{
        dispatch(getPokemon());
    },[dispatch]) 

    function handleClick(e){
        e.preventDefault();
        alert('Loading pokemons, this may take a few seconds...')
        dispatch(getPokemon());

    }


    // Filtros
    function handleFilterType(e){
        dispatch(filterPokemonType(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreatedApi(e.target.value))
    }

    // ORDENAMIENTOS
    function handleOrderName(e){
        e.preventDefault()
        setOrden(e.target.value)
        dispatch(orderName(orden))
        setCurrentPage(1)     
    }

    function handleOrderAttack(e){
        e.preventDefault();
        setOrden(e.target.value)
        dispatch(orderAttack(e.target.value))
        setCurrentPage(1)
    }


    return(
        <MainConteiner >

            <div >
                <Link to="/" > <ButtonExit >Exit</ButtonExit> </Link>

                <Link to="/pokemonCreated"> <Button>Create Pokemon</Button> </Link>
                
                <Button onClick={ e => handleClick(e) }> Reload Pokemones </Button>
                
            </div>
            
            <SearchBar  paginado={paginado}  />
        
            {/*ORDENAMIENTOS*/}
            <div>
                <FilterAndOrd onChange={ e => handleOrderName(e) } >
                    <option value="all"  >Order/Name</option>
                    <option value='asc' >A-z</option>
                    <option value='desc' >a-Z</option>
                </FilterAndOrd>

                <FilterAndOrd onChange={ e => handleOrderAttack(e)  }  >
                    <option>Order/Attack</option>
                    <option value="+attack" >+Attack</option>
                    <option value="-attack" >-Attack</option>
                </FilterAndOrd>
            {/* FILTROS */}
                <FilterAndOrd onChange={ e => handleFilterType(e) }>
                    <option value='all' >All</option>
                    <option value='normal' >normal</option>
                    <option value='fighting' >fighting</option>
                    <option value='flying' >flying</option>
                    <option value='poison' >poison</option>
                    <option value='ground' >ground</option>
                    <option value='rock' >rock</option>
                    <option value='bug' >bug</option>
                    <option value='ghost' >ghost</option>
                    <option value='steel' >steel</option>
                    <option value='fire' >fire</option>
                    <option value='water' >water</option>
                    <option value='grass' >grass</option>
                    <option value='electric' >electric</option>
                    <option value='psychic' >psychic</option>
                    <option value='ice' >ice</option>
                    <option value='dragon' >dragon</option>
                    <option value='dark' >dark</option>
                    <option value='fairy' >fairy</option>
                    <option value='unknown' >unknown</option>
                    <option value='shadow' >shadow</option>
                </FilterAndOrd>
                
                <FilterAndOrd onChange={e => handleFilterCreated(e) } >
                    <option value="all" >All</option>
                    <option value='api' >Api</option>
                    <option value='created' >Created</option>

                </FilterAndOrd>
            </div>

            <Paginado 
               pokemonesPage={pokemonesPage}     
               allPokemones={allPokemones.length}
               paginado={paginado}     
            />




            
            <CardContainer>
                {
                    !allPokemones.length ? (
                        <Loading />
                    ) : currentPokemones.map( el=> {
                        return (
                            <CardPokemon>
                                < Card name={el.name} image={el.img} tipos={el.tipos} attack={el.attack}  key={el.id} id ={el.id} />
                            </CardPokemon>
                        )
                    }) 
                }
            </CardContainer>


        </MainConteiner>   
    )
}






import React from 'react'
import { Button } from './PaginadoStyle.js'
export default function Paginado({ pokemonesPage , allPokemones , paginado }){
    const pageNumbers = [];

    for(let i = 0 ; i <= Math.floor(allPokemones/pokemonesPage) ; i++){
        pageNumbers.push( i + 1)
    }

    return(
        <nav>
            <ul >
                { pageNumbers && 
                 pageNumbers.map( number => (
                    <Button  key={number}>
                        <a onClick={()=> paginado(number)} >{number}</a>
                    </Button>
                 )
                 )
                 }
            </ul>
        </nav>
    )



}   
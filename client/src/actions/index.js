import axios from 'axios';

const URL = 'http://localhost:3001';

export function getPokemon(){
    return async(dispatch)=>{
        var res = await axios.get(`${URL}/pokemones`)
        return dispatch({
            type: "GET_POKEMONS",
            payload : res.data
        })

    }
}


export function getPokemonName(name){
    return async function(dispatch){
        try{
            let response = await axios.get(`${URL}/search?name=${name}`)
            return dispatch({
                type : "GET_POKEMON_NAME",
                payload : response.data
            })
        }catch(e){
            alert('No se encontro al pokemon')
        }
    }
}




// FILTROS
export function filterPokemonType(value){
    return {
        type : "FILTER_POKEMON_TYPE",
        payload : value
    }
}


export function filterCreatedApi(value){
    return{
        type : "FILTER_CREATED",
        payload : value
    }
}



// Ordenamientos
export function orderName(payload){
    return{
        type: "ORDER_NAME",
        payload
    }
}

export function orderAttack(value){
    return{
        type : "ORDER_ATTACK",
        payload : value
    }
}


export function pokemonDetail(id){
    return async(dispatch)=>{
        let response = await axios.get(`${URL}/${id}`)
        return dispatch({
            type : "GET_DETAIL_POKEMON",
            payload : response.data
        })
    }
}

export function clearDetail(){
    return{
        type : "CLEAR_DETAIL",
    }
}

// FORMULARIO
export function getTypes(){
    return async function(dispatch){
        let response = await axios.get(`${URL}/types`)
        return dispatch({
            type :"GET_TYPES",
            payload : response.data
        })
    }
}


export function postPokemon(payload){
    return async function(dispatch){
        const response = await axios.post(`${URL}/pokemons` , payload)
        return response

    }
}
const { Pokemon }  = require('../db.js')
const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/pokemon'

const getPokemonName = async(name)=>{


    const nameMin = name.toLowerCase();

    const pokemonAllDb = await Pokemon.findAll();
    const prueba = pokemonAllDb.filter( el => el.name.toLowerCase().includes(nameMin))
    if(prueba.length)return prueba;

    // Pokemon in api 
    const res = await axios.get(`${API}/${nameMin}`)
    return [{
        "name": res.data.name ,
        "id": res.data.id ,
        "hp": res.data.stats[0].base_stat ,
        "attack":res.data.stats[1].base_stat ,
        "defense":res.data.stats[2].base_stat ,
        "speed": res.data.stats[5].base_stat ,
        "height":res.data.height ,
        "weight": res.data.weight,
        "img": res.data.sprites.front_default,
        "type" : res.data.types.map(t => t.type.name) 
    }]
}

module.exports = getPokemonName;
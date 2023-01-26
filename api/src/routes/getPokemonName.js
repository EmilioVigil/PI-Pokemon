const express = require('express');
const route = express.Router();

const getPokemonName = require('../controllers/PokemonName');


route.get('' , async(req , res)=>{

    const { name } = req.query
    try{
        const pokemonName = await getPokemonName(name);
        console.log('Encontro al pokemon')
        res.status(200).send(pokemonName)
    }catch(e){
        console.log('No encontro al pokemon')
        res.status(404).send(e.message)
    }
})



module.exports = route 
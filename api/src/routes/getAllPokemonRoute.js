const express = require('express');
const route = express.Router()
const getAllPokemones = require('../controllers/listPokemon.js');



route.get('/', async (req,res)=>{
	const pokemons = await getAllPokemones()
	
	try{
		res.status(200).send(pokemons);
	}catch(e){
		res.status(404).send(e.message)
	}
	 
})


module.exports = route 
const express = require('express');
const router = express.Router()
const getPokemon = require('../controllers/getId.js');
const { getPokemonApi , getPokemonDb }= require('../controllers/getId.js');


router.get('/:id' , async (req,res)=>{
	const { id } = req.params
	if(id.length > 5){
		try{
			const pokDb = await getPokemonDb(id)
			res.status(200).send(pokDb)
		}catch(e){
			res.status(404).send(e.message)
		}
	}

	try{
		const pokApi = await getPokemonApi(id)
		res.status(200).send(pokApi)
	}catch(e){
		res.status(404).send()
	}
	
})



module.exports = router;
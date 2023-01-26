const express = require('express');
const router = express.Router()
const addPokemon = require('../controllers/addPokemon.js');
const { Tipo } = require('../db.js');


router.post('/', async(req,res)=>{
	try{

		const {name , hp , attack , defense , speed , height , weight , img , type} = req.body;
		const newPokemon = await addPokemon(name , hp, img, attack , defense , speed ,height ,weight)

		// Busco en mi tabla tipos, los tipos que coincidan con el type que me mandaron por body
		let typeDb = await Tipo.findAll({
			where : {name : type}
		})


		
		// SI TIENE MAS DE UN TIPO, USAMOS EL METODO ADD, SINO TENDRIAMOS QUE USAR EL METODO GET
		await newPokemon.addTipos(typeDb); 

		res.status(200).send('Pokemon created')

		
	}catch(e){
		res.status(404).send(e.message)
	}
})


module.exports = router;
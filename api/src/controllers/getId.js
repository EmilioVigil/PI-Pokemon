const { Pokemon , Tipo } = require('../db.js');

const axios = require('axios')
const API =  "https://pokeapi.co/api/v2/pokemon";


const getPokemonApi = async(id)=>{

	const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return {
			name : res.data.name,
			img : res.data.sprites.front_default,
			tipo : res.data.types.map(t => t.type.name),
			id : res.data.id,
			hp : res.data.stats[0].base_stat,
			ataque : res.data.stats[1].base_stat,
			defense : res.data.stats[2].base_stat,
			velocidad : res.data.stats[5].base_stat,
			altura :res.data.height,
			peso : res.data.weight
			}
	}
 

const getPokemonDb = async(id)=>{

	const pokemonDb = await Pokemon.findOne({
		where : {id : id},
		include :{
			model : Tipo,
			through : [],
		}
	})

	if(!pokemonDb)throw new Error('No se encontro al pokemon')
	let obj = {};

	obj.name = pokemonDb.dataValues.name
	obj.img = pokemonDb.dataValues.img
	obj.tipo = pokemonDb.dataValues.Tipos.map(el => el.name)
	obj.id = pokemonDb.dataValues.id
	obj.hp = pokemonDb.dataValues.hp
	obj.ataque = pokemonDb.dataValues.attack
	obj.defense = pokemonDb.dataValues.defense
	obj.velocidad = pokemonDb.dataValues.speed
	obj.altura = pokemonDb.dataValues.height
	obj.peso = pokemonDb.dataValues.weight

	return obj
}




module.exports = {getPokemonApi , getPokemonDb}

const { Pokemon , Tipo } = require('../db.js');
const axios = require('axios')
const API =  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40";

const listPok = async()=>{

	let respuesta = await axios.get(API);
	let pokemones = respuesta.data.results

	let dat = [];

	for(let p of pokemones){
		var res = await axios.get(p.url);
		dat.push({
			name : res.data.name,
			img : res.data.sprites.front_default,
	     	tipos : res.data.types.map(t => t.type.name),  
			id : res.data.id,
			attack : res.data.stats[1].base_stat
		})
	}


	return dat; 	
}  	
	

const listPokDb = async()=>{
	const pok = await Pokemon.findAll({
		attributes : ["name" , "img" , "id" , "createDb" , "attack"],
		include : {
			model : Tipo,
			attributes : { exclude : ['PokemonTipo'] }, 
			through : [],
		}
	})
	
	let obj = []
	for (const p of pok){
		obj.push({
			name : p.name,
			img : p.img,
			tipos : p.Tipos.map(el => el.name),
			id : p.id,
			createDb : p.createDb,
			attack : p.attack
		})
	}
	return obj;	
}



const  getAllPokemones = async ()=>{
	const apiInfo = await listPok();
	const dbInfo = await listPokDb();

	const infoTotal = apiInfo.concat(dbInfo)


	return infoTotal; 
}

module.exports = getAllPokemones; 
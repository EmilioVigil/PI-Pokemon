const { Pokemon } = require('../db.js');


const addPokemon = async( name , hp , img , attack , defense , speed , height , weight)=>{

	const newPokemon = await Pokemon.create(
		{
			name, 
			hp,
			img,
			attack,
			defense,
			speed,
			height,
			weight
		})

	return newPokemon;
}




module.exports = addPokemon;
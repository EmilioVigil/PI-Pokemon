const axios = require('axios');
const API = 'https://pokeapi.co/api/v2/type'
const { Tipo } = require('../db.js');


const getTypes = async()=>{

	const response = await axios.get('https://pokeapi.co/api/v2/type')
	
	response.data.results.forEach( el => {
		Tipo.findOrCreate({
			where : { name : el.name }
		})
	})

	const allTypes = await Tipo.findAll(); 

	return allTypes;
}



module.exports = getTypes;
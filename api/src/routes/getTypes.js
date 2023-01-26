const express = require('express');
const router = express.Router()
const getType = require('../controllers/getTypes.js');





// GET DE TYPES : RUTA LISTA  / PODRIA HACER UN FINORCREATE
router.get('/' , async(req,res)=>{
	try{
		const newTypes = await getType()
		res.status(200).send(newTypes)
	}catch(e){
		res.status(404).send(e.message)
	}
})


module.exports = router
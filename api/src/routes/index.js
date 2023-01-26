const express = require('express')
const router = express.Router()


// CONTROLLERS
const getAllPokemonesRoute = require('./getAllPokemonRoute.js')
const getTypes = require('./getTypes')
const postPokemon = require('./postPokemon.js')
const getId = require('./getId.js')
const getPokemonName = require('./getPokemonName')


// RUTAS
router.use('/pokemones' , getAllPokemonesRoute)
router.use('/types', getTypes )
router.use('/pokemons' , postPokemon)
router.use('/search' , getPokemonName)
router.use('/' , getId)






module.exports = router;
 
import React from 'react';
import { useState , useEffect } from 'react';
import { useDispatch  } from "react-redux";
import { getPokemonName } from '../../actions'


import {SearchContainer , SearchPokemon , Button} from './SearchBarStyle.js'


export default function SearchBar({paginado}){
	const dispatch = useDispatch();

	const [ name , setName ] = useState('');

	function hanldeInputChange(e){
		e.preventDefault()
		setName(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		if(name === '') return alert('Enter a Pokemon');
		dispatch(getPokemonName(name));
		paginado(1);
		setName('')
	}



	return(

		<SearchContainer>
			<SearchPokemon 
				type="text" 
				placeholder='Search Pokemon...'
				value={name}
				onChange={ e => hanldeInputChange(e)}
				/>
			<Button type='submit' onClick={ e => handleSubmit(e) } >Search</Button>

		</SearchContainer>

		)

}
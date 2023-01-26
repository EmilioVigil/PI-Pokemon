import React , { useState , useEffect } from 'react';
import { Link , useHistory } from "react-router-dom";
import { getTypes , postPokemon } from "../../actions";
import { useDispatch , useSelector } from 'react-redux';

import { FormContainer , Errors , ButtonSubmit , Form , ButtonType ,OptionType , ButtonSubmitDisabled } from './CreatedPokemonStyle.js'


const validate = (input)=>{
	let errors = {}

	if(!input.name){
		errors.name = "x Name is required"
	}
	
	if(input.hp > 100 || input.hp < 1){
		errors.hp = "x The range has to be between 1 and 100"
	}
	
	if(input.attack > 150 || input.attack < 1){
		errors.attack = "x The range has to be between 1 and 100"
	}
	
	if(input.defense > 100 || input.defense < 1){
		errors.defense = "x The range has to be between 1 and 100"
	}
	
	if(input.speed > 100 || input.speed < 1){
		errors.speed = "x The range has to be between 1 and 100"
	}
	
	if(input.height > 100 || input.height < 1){
		errors.height = "x The range has to be between 1 and 100"
	}
	
	if(input.weight > 100 || input.weight < 1){
		errors.weight = "x The range has to be between 1 and 100"
	}

	if(input.type.length === 0){
		errors.type = 'x You have to choose at least one type'
	}

	if(!input.img){
		errors.img = 'Image url'
	}


	return errors
}


export default function CreatePokemon(){
	const history = useHistory();
	const dispatch = useDispatch();
	const types = useSelector( (state)=> state.allTypes )

	// Estados
	const [input , setInput] = useState({
		name : "",
    	hp : "",
    	attack : "",
    	defense : "",
    	speed : "",
    	height : "",
    	weight : "",
    	img : "",
    	type : []
	})

	const [error , setError] = useState({
		name : "",
    	hp : "",
    	attack : "",
    	defense : "",
    	speed : "",
    	height : "",
    	weight : "",
    	img : "",
    	type : ""
	})



	

  	useEffect(()=>{
        dispatch(getTypes());
    })


	function handleChange(e){
		setInput({
			...input ,
			[e.target.name] : e.target.value
		})

		setError(validate({
			...input ,
			[e.target.name] : e.target.value
		}))
	}

	function handleSelect(e){

		if(!input.type.includes(e.target.value)){
			setInput({
				...input,
				type :  [...input.type , e.target.value]
			})
		}


	}


	function handleSubmit(e){
		e.preventDefault()

		if(input.type.length > 0){
			dispatch(postPokemon(input))
			alert('Pokemon Created!!')
			setInput({
				name : "",
				hp : "",
				attack : "",
				defense : "",
				speed : "",
				height : "",
				weight : "",
				img : "",
				type : []
			})
			history.push('/home')
		}else{
			alert('Fill in all the fields')
		}




	}

	function handleDelete(el){
		setInput({
			...input,
			type : input.type.filter( t => t !== el) 
		})
	}

	function handleTypes(el){
		handleDelete(el)
	}

	return(
		<FormContainer>
			
			<h1>Created Pokemon</h1>	
			<p>Please fill out this form with the required information</p>

			<Form >
				{/*CAMPO 1*/}
				<div>
					<label >Charge Your Name:</label>
					<input type="text"  value={input.name} name='name' onChange={handleChange}  />
					{
					    error.name && <Errors >{error.name}</Errors>	
					}
					<label >Upload image</label>
					<input type="text" value={input.img} name='img' onChange={handleChange} />		
					{
						error.img && <Errors  > {error.img} </Errors>
					}					
				</div>
				
				{/*CAMPO 2*/}
				<fieldset>
					<label >Charge your HP:</label>
					<input type="number" value={input.hp} name='hp' onChange={handleChange}  />
					{
						error.hp && <Errors  >{error.hp}</Errors>	
					}

					<label >
						Charge Your Attack:
						<input type='number' value={input.attack} name='attack' onChange={handleChange} />
						{
							error.attack && <Errors  >{error.attack}</Errors>	
						}
					</label>

					<label >
						Charge your deffense
						<input type="number" value={input.defense} name='defense' onChange={handleChange}  />
						{
							error.defense && <Errors  >{error.defense}</Errors>	
						}						
					</label>
						Charge Your Speed
						<input type="number" value={input.speed} name='speed' onChange={handleChange}  />
						{
							error.speed && <Errors  >{error.speed}</Errors>	
						}
					<label >
						Charge Your Heigth
						<input type="number" value={input.height} name='height' onChange={handleChange}  />
						{
							error.height && <Errors  >{error.height}</Errors>	
						}
					</label>

					<label >
						Charge Your Weight
						<input type="number" value={input.weight} name='weight' onChange={handleChange}  />
						{
							error.weight && <Errors  >{error.weight}</Errors>	
						}		
					</label>
				</fieldset>

					{/*CAMPO 3*/}
				<fieldset>
					<label >Charge Your Types:</label>
					<select onChange={ (e)=> handleSelect(e) }  >
							{
								types.map( (t)=>{
									return(

										<option name={t.name} >{t.name}</option>
									)
								})
							}
					</select>

					{/*MOSTRAMOS LOS TIPOS QUE VA MARCANDO POR PANTALLA*/}
				{
					input.type.map( el=> {
							return(
							<div  >

								<OptionType>{el} <ButtonType onClick={ (e)=>{
									e.preventDefault()
									handleTypes(el)} 
									}  >X</ButtonType>  </OptionType> 
							</div>)
							
						})

				}
				
				</fieldset>


				{

					(!error.name && !error.img && !error.hp && !error.attack && !error.defense && !error.speed && !error.height && !error.weight ) ?  <ButtonSubmit type="submit" onClick={e => handleSubmit(e) } >Submit</ButtonSubmit> : <button disabled >Submit</button>				 
				}


			</Form>



			<Link to="/home"> <button  >&laquo; Volver</button> </Link>


		</FormContainer>




		)



}



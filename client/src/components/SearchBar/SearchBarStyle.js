import styled from 'styled-components'

const SearchContainer = styled.div`
  display: block;
  color: black;
  text-align: center;
  padding: 20px 600px;
  text-decoration: none;
  font-size: 17px;
`


const SearchPokemon = styled.input`
	margin : 15px auto;
	background-color : black;
	color : white;
	border-radius : 20px;
	font-size : 15px;
	padding : 10px;
	`
const Button = styled.button`
	background-color : black;
	color : white;
	font-size : 15px;
	padding : 10px;
	margin : 15px; 
	border-radius : 20px;
	border : 2px solid white;
	&:hover{
		transition-duration : 0.5s;
		background-color :  #3A57D8;
		border : 2px solid blue
	}

` 


export { SearchContainer , SearchPokemon , Button}
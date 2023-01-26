import styled from 'styled-components'


const MainConteiner = styled.main`
	margin : 0;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
    background: url('https://www.nintenderos.com/wp-content/uploads/2019/02/pokemon-espada-y-escudo.-1.jpg') no-repeat center center fixed;
    min-height: 100vh;
    background-size: cover;
    
	`

const Button = styled.button`
	background-color : #EE7400;
	font-size : 20px;
	padding : 10px;
	margin : 15px; 
	border-radius : 20px;
	border : 2px solid black;
	&:hover{
		transition-duration : 0.5s;
		background-color : red;
	}
`
const ButtonExit = styled.button`
	background-color : #EE7400;
	font-size : 20px;
	padding : 10px;
	margin : 15px; 
	border-radius : 20px;
	border : 2px solid black;
	
	&:hover{
		transition-duration : 0.5s;
		background-color : #EB1313;
		border : 2px solid red
	}
`
// FILTROS Y ORDENAMIENTOS
const FilterAndOrd = styled.select`
	background-color : #EE7400;
	font-size : 20px;
	padding : 5px;
	margin : 15px; 
	margin-right : 40px;
	border-radius : 20px;
	border : 2px solid black;
	&:hover{
		transition-duration : 0.5s;
		background-color : red;
	}
`	

const CardContainer = styled.div`
	color : white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    margin : 0 auto;

`

const CardPokemon = styled.div`
    color : black;
	padding: 20px 16px;
    background-color: rgba(255, 255, 255, 0.644);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 40px;
    margin-bottom: 25px;
`



export { MainConteiner , Button , ButtonExit , FilterAndOrd , CardPokemon , CardContainer}
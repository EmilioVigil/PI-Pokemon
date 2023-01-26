import styled from 'styled-components'


const CardContainer = styled.div`
	box-sizing: border-box;
	text-align: center;
	padding: 8vh;
    min-height: 100vh;
    background: url('https://p4.wallpaperbetter.com/wallpaper/696/177/76/pokemon-pokeball-red-wallpaper-preview.jpg') no-repeat center center fixed;
    background-size: cover;

`

const CardPokemon = styled.div`
    width: 400px;
    padding: 10px;
    margin: auto;
    border-radius: 4px;
    color: white;
    box-shadow: 7px 13px 37px #000;	

    h1{
    	font-size: 32px;
    	margin-bottom: 20px;
	}

	h3{
		margin-top: 30px;
	}

	img{
		width: 200px;
		height: 250px;	
	}

	p{
		font-size: 20px;
	}

	button{
		padding : 7px;
		border-radius : 10px;
		background-color : #FFBEBE;
		color: black;
	}

`


export { CardContainer , CardPokemon }
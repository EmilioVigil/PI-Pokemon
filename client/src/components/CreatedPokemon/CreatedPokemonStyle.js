import styled from 'styled-components';

const FormContainer = styled.div`
    margin: -21px;
    background: url('https://p4.wallpaperbetter.com/wallpaper/933/827/743/pokemon-pixel-art-wallpaper-preview.jpg') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    text-align:center
`

const Form = styled.form`
	margin : 0 auto;
	max-width: 500px;
	width: 60vw;
	min-width: 300px;
	padding-bottom: 2em;
	h1{
		text-align: center
	}

	form {
	  width: 500px;
	  margin: 0 auto;
	  text-align: left;
	}

	label {
	  display: block;
	  font-size: 16px;
	  margin-bottom: 8px;
	}

	input{
	  width: 100%;
	  font-size: 16px;
	  padding: 8px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	}

	fieldset{
	  border: 0 ; 
	  margin:0;
	  padding: 2rem;  
	  padding-left: 0;
	  padding-right: 0;
	  border-bottom: 3px solid  #3b3b4f;
	}	
`


const Errors = styled.p`
	color : red;
	font-size : 15px
`

const ButtonSubmit = styled.button`
	  font-size: 16px;
	  padding: 8px 16px;
	  border: none;
	  border-radius: 4px;
	  background-color: #4caf50;
	  color: white;
	  cursor: pointer;
	  text-align:center;

	  &:hover{
	  	transition-duration : 0.5s;
	  	background-color: yellow;
	  	color:black
	  }
`
const ButtonSubmitDisabled = styled.button`
	  font-size: 16px;
	  padding: 8px 16px;
	  border: none;
	  border-radius: 4px;
	  background-color: #8C8989;
	  color: white;
	  cursor: pointer;
	  text-align:center;

`

const OptionType = styled.p`
	display: inline-block;
	background-color: #EE7400;
	border-radius:10px;
	font-size:15px;
	padding : 10px
`

const ButtonType = styled.button`
	background-color:red;
	color: black;
	border-radius : 4px
`



export { FormContainer , Errors , ButtonSubmit , Form , ButtonType , OptionType ,ButtonSubmitDisabled}
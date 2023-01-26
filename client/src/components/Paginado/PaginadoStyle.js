import styled from 'styled-components'


const Button = styled.button`
	padding: 10px;
	height: 40px;
	width: 40px;
	border : 2px solid black;
	margin-left : 50px;
	border-radius: 10px;
	transition: .5s;

	&:hover{
		background-color: blue;
	}

`

export { Button }
import styled from 'styled-components'



const LandingConteiner = styled.div`
	  margin : 0;
	  padding : 0;
  	min-height: 100vh;
  	background: url('https://w0.peakpx.com/wallpaper/740/298/HD-wallpaper-pokemon-game-poke-ball-red-simplistic.jpg') no-repeat center center fixed;
  	background-size: cover;

	`

const Title = styled.h1`
  font-family : cursive;
  text-align: center;
  font-size: 3em;
  font: 'arial';
  color: rgba(254, 254, 254, 0.85);
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%) translateY(-50%)
	`
const Button = styled.button`
  background-color: black;
  border: none;
  color: #ffffff;
  padding: 16px 50px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50% 20% / 10% 40%;
  cursor : pointer;

  &:hover {
    transition-duration : 0.5s;
  	background-color: #5d0303d5;
  	color: white;
  }

`
const Footer = styled.div`
  position: fixed;

  bottom : 50%;
  left: 50%;
  top : 50%;
  right : 50%;

  color: white;


`

export { LandingConteiner , Button , Title , Footer  }
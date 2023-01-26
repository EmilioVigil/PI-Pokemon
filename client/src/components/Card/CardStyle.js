import styled from 'styled-components'

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`

const CardPokemon = styled.div`
	padding: 2px 16px;

    button{
        background-color : #FFE0CD;
        font-size : 14px;
        padding : 15px;
        margin : 15px; 
        border-radius : 20px;
        border : 2px solid ;
        &:hover{
            transition-duration : 0.5s;
            background-color :red;
            border : 2px solid

                }
    }

`


export { CardContainer , CardPokemon  }
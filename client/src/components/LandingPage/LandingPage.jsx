import React from 'react';
import { Link } from 'react-router-dom'

import { LandingConteiner , Button , Title  } from './LandingPageStyle.js'
export default function LandingPage(){
    return(
        <div>
            <LandingConteiner>  
                <Title >Poke App</Title>
                <Link to="/home">
                    <Button><span>Ingresar</span></Button>
                </Link>
            </LandingConteiner>
        </div>

    )
}


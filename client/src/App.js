import { Route } from 'react-router-dom';
import React from 'react'

// Componentes
import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import PokDetail from './components/Detail/Detail.jsx';
import CreatePokemon from './components/CreatedPokemon/CreatedPokemon.jsx';

function App() {
  return (
      <div>

      <Route 
            exact
            path="/" 
            render = {()=> <LandingPage />} 
            />        
      <Route 
            path="/home"
            component={Home}
            />

      <Route
            path= "/pokemon/:id"
            component={PokDetail}
            />

      <Route 
            path="/pokemonCreated"
            component={CreatePokemon}
            />


      </div>  


    );
}

export default App;

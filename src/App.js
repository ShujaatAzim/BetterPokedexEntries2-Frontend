import React from 'react'
import PokemonCardsContainer from './ContainerComponents/PokemonCardsContainer'
import Jumbo from './Components/Jumbo'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <PokemonCardsContainer />
    </div>
  )
}

export default App;

import React from 'react'
import NavBar from '../Components/NavBar'
import Jumbo from '../Components/Jumbo'
import PokemonCardsContainer from '../ContainerComponents/PokemonCardsContainer'

const PokemonPage = () => {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <h1>All Pokemon</h1>
      <PokemonCardsContainer />
    </div>
  )
}

export default PokemonPage
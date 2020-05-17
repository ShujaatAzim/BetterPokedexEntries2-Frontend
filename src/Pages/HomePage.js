import React from 'react'
import PokemonCardsContainer from '../ContainerComponents/PokemonCardsContainer'
import Jumbo from '../Components/Jumbo'
import NavBar from '../Components/NavBar'

const HomePage = props => {

  return (
    <div>
      <NavBar />
      <Jumbo />
      <h1>{props.loggedInStatus}</h1>
      <h1></h1>
      {/* <PokemonCardsContainer /> */}
    </div>
  )
}

export default HomePage
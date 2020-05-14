import React from 'react'
import PokemonCardsContainer from '../ContainerComponents/PokemonCardsContainer'
import Jumbo from '../Components/Jumbo'
import NavBar from '../Components/NavBar'

const HomePage = props => {


  return (
    <div>
      <NavBar />
      <Jumbo />
      {props.loggedInStatus}
      {/* <PokemonCardsContainer /> */}
    </div>
  )
}

export default HomePage
import React from 'react'

const PokemonInfoPage = props => {
  return (
    <div>
      <h1>
        {props.pokemon.name}
      </h1>
    </div>
  )
}

export default PokemonInfoPage
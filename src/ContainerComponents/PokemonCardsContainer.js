import React, { useState, useEffect } from 'react'
import PokemonCard from '../Components/PokemonCard'

const PokemonCardsContainer = () => {
  
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(data => setAllPokemon(data))
  })

  return (
    <div>
      {allPokemon.map(pokemon => {
        return <PokemonCard pokemon={pokemon} />
      })}
    </div>
  )
}

export default PokemonCardsContainer
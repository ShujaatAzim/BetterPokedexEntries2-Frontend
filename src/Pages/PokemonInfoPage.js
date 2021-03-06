import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const PokemonInfoPage = props => {

  const [pokemon] = useState(props.location.state)
  const [complete, setComplete] = useState(props.location.state.complete)

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{pokemon.name}</h1>
        <br />
        <img src={`https://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`} alt={`${pokemon.name}`} />
        <br />
        <h3>{pokemon.species} Pokemon</h3>
        <br />
        <h5>{pokemon.pokedex}</h5>
        <br />
        <Button style={{ margin: "1rem" }}>Edit</Button>
        <Button onClick={() => setComplete(!complete)} variant={complete ? "success" : "outline-secondary"} style={{ marginLeft: "0.5rem" }}>
              { complete? "Complete!" : "Complete?" }</Button>
      </div>
    </div>
  )
}

export default PokemonInfoPage
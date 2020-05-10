import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Jumbo = () => {
  return(
    <Jumbotron>
      <h1>Welcome to Better Pokedex Entries!</h1>
      <p>
        This simple app allows you to make your own Pokedex entries! The ones in the games are boring and short, but here you can make them rock!
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default Jumbo
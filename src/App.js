import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import AllPokemonPage from './Pages/AllPokemonPage'
import PokemonInfoPage from './Pages/PokemonInfoPage'
 
const App = () => {

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState({})

  const handleLogin = () => (
    setLoggedInStatus("LOGGED_IN")
  )

  return (
    <div>
      <Router>
        <Route exact path="/login" render={props => <LoginPage {...props} handleLogin={handleLogin} loggedInStatus={loggedInStatus} />} />
        <Route exact path="/home" render={props => <HomePage {...props} loggedInStatus={loggedInStatus} />} />
        <Route exact path="/pokemon" component={AllPokemonPage} />
        <Route exact path="/pokemon/:name" render={(props) => <PokemonInfoPage {...props} />} /> 
      </Router>
    </div>
  )
}

export default App;

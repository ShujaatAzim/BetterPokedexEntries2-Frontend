import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoginPage from './Pages/LoginPage'
import PokemonPage from './Pages/PokemonPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/home" component={App} />
      <Route exact path="/pokemon" component={PokemonPage} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
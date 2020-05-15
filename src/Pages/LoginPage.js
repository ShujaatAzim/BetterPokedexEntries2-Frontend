import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../Components/NavBar'
import Jumbo from '../Components/Jumbo'
import { Form, Button } from 'react-bootstrap'
import '../Styles/App.css'

const LoginPage = props => {

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("")
  const [registrationErrors, setRegistrationErrors] = useState("")

  const handleSuccessfulAuth = data => {
    props.history.push("/home")
  }

  const handleLoginSubmit = e => { 
    e.preventDefault()
    console.log({
      email: loginEmail,
      password: loginPassword
    })
    setLoginEmail("")
    setLoginPassword("")
  }

  const handleRegisterSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:3000/registrations', {
      user: {
        email: registerEmail,
        password: registerPassword,
        password_confirmation: registerPasswordConfirm 
      }
    },
      // { withCredentials: true }
    ).then(response => {
      console.log(response)
      if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data)
      } else {
        // props.handleAuthError(response.data)
        console.log('error registering')
      }
    }).catch(error => {
      setRegistrationErrors(error)
      console.log(error)
    })
    setRegisterEmail("")
    setRegisterPassword("")
    setRegisterPasswordConfirm("")
  }
 
  return (
    <div>
      <NavBar />
      <div className="app">
        <div className="login">
          <h3>Login!</h3>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="register">
          <h3>Or Register!</h3>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group controlId="registerEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="registerPasswordConfirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={registerPasswordConfirm} onChange={(e) => setRegisterPasswordConfirm(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
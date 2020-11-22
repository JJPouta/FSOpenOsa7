import React from 'react'
import PropTypes from 'prop-types'
import {Button, Form} from 'react-bootstrap'

const LoginForm = ({loginFunction,usernameFunction,passwordFunction}) => {

  LoginForm.propTypes = {
    loginFunction: PropTypes.func.isRequired,
    usernameFunction: PropTypes.func.isRequired,
    passwordFunction: PropTypes.func.isRequired
  }
    
  return(
    <div>
      <h2 style={{color:'purple'}}>Insert credentials to log in</h2>
      <Form onSubmit={loginFunction}>
        <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control id='unameInput' onChange={({ target }) => usernameFunction(target.value)} type="text" placeholder="Input your username"></Form.Control>
        </Form.Group>
         
        <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control id='pwdInput' onChange={({ target }) => passwordFunction(target.value)} type="password" placeholder="Input your password"></Form.Control>
        </Form.Group>
        <Button variant="primary" id='loginBtn' type="submit">Login</Button>  
      </Form>
    </div>)
}

export default LoginForm
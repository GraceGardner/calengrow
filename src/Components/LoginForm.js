import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../apiCalls.js'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import '../Styles/LoginForm.scss'

const LoginForm = ({toggleLoggedIn}) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const {setError} = useContext(ErrorContext)
  const navigate = useNavigate()

  const loginUser = (event) => {
    event.preventDefault()
    login({userEmail, userPassword})
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      toggleLoggedIn()
      navigate('/dashboard')
    })
    .catch(error => setError(error))
  }

  return (
    <div className='login-container'>
      <form className='login-form'>
        <input
          className='login-email-input'
          type='text'
          placeholder='email'
          onChange={event => setUserEmail(event.target.value)}
          ></input>
        <input
          className='login-password-input'
          type='password'
          placeholder='password'
          onChange={event => setUserPassword(event.target.value)}
        ></input>
        <button
          className='submit-login-button'
          onClick={event => loginUser(event)}
          type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm

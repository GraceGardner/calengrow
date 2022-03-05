import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../apiCalls.js'
import {UserContext} from '../Contexts/UserContext'

const LoginForm = ({setHomeError}) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const loginUser = (event) => {
    event.preventDefault()
    login({userEmail, userPassword})
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      navigate('/dashboard')
    })
    .catch(error => setHomeError(error))
  }

  return (
    <div className='signup-container'>
      <form>
        <input
          type='text'
          placeholder='email'
          onChange={event => setUserEmail(event.target.value)}
          ></input>
        <input
          type='password'
          placeholder='password'
          onChange={event => setUserPassword(event.target.value)}
        ></input>
        <button onClick={event => loginUser(event)} type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm

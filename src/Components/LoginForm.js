import React, {useState, useContext} from 'react'
import {login} from '../apiCalls.js'
import {UserContext} from '../Contexts/UserContext'

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const loginUser = (event) => {
    event.preventDefault()
    login({userEmail, userPassword})
    .then(data => setUser(data))
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

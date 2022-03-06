import React, {useState, useContext} from 'react'
import {registerUser} from '../apiCalls.js'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'

const SignupForm = ({setHomeError}) => {
  const [nickname, setNickname] = useState()
  const [zipcode, setZipcode] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmation, setConfirmation] = useState()

  const {setUser} = useContext(UserContext)
  const {setError} = useContext(ErrorContext)

  const submitUser = (event) => {
    event.preventDefault()
    registerUser({nickname, zipcode, email, password, confirmation})
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
    })
    .catch(error => setError(error))
  }

  return (
    <div className='signup-container'>
      <form>
        <input
          type='text'
          placeholder='nickname'
          onChange={event => setNickname(event.target.value)}
        ></input>
        <input
          type='text'
          placeholder='zipcode'
          onChange={event => setZipcode(event.target.value)}
          ></input>
        <input
          type='text'
          placeholder='email'
          onChange={event => setEmail(event.target.value)}
          ></input>
        <input
          type='password'
          placeholder='password'
          onChange={event => setPassword(event.target.value)}
        ></input>
        <input
          type='password'
          placeholder='confirm password'
          onChange={event => setConfirmation(event.target.value)}
        ></input>
        <button onClick={event => submitUser(event)} type="submit">sign up</button>
      </form>
    </div>
  )
}

export default SignupForm

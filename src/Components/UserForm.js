import React, {useContext, useState} from 'react'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import {patchUser} from '../apiCalls.js'
import '../Styles/UserForm.scss'

const UserForm = ({toggleClick}) => {
  const {user, setUser} = useContext(UserContext)
  const {setError} = useContext(ErrorContext)
  const [newNickname, setNewNickname] = useState()
  const [newZipcode, setNewZipcode] = useState()
  const [newEmail, setNewEmail] = useState()

  const submitUpdate = () => {
    toggleClick()
    patchUser({
      token: user.token,
      email: newEmail,
      zipcode: newZipcode,
      nickname: newNickname
    })
    .then(data => setUser(data))
    .catch(error => setError(error))
  }
  return (
    <div className='user-update-container'>
      <form className='update-user-form'>
        <input
          className='update-user-email'
          type='text'
          placeholder='email'
          onChange={event => setNewEmail(event.target.value)}
        ></input>
        <input
        className='update-user-nickname'
        type='text'
        placeholder='nickname'
        onChange={event => setNewNickname(event.target.value)}
        ></input>
          <input
          className='update-user-zipcode'
          type='text'
          placeholder='zipcode'
          onChange={event => setNewZipcode(event.target.value)}
        ></input>
        <button
          onClick={submitUpdate}
          type="submit"
          className='update-user-button'
        >Update</button>
      </form>
    </div>
  )
}

export default UserForm

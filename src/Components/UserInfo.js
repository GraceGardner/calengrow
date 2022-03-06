import React, { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import UserForm from './UserForm'
import '../Styles/UserInfo.scss'

const UserInfo = () => {
  const {user} = useContext(UserContext)
  const [ clicked, setClick ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user.token){
      navigate('/')
    }
  }, [])

  const toggleClick = () => {
    setClick(!clicked)
  }

  const userInformation = () => {
    return(
      <div className='user-container'>
        <div className='user-header'>
          <h1>Hello {user.nickname}</h1>
        </div>
        <div className='user-details'>
          <p><span className='bold'>zipcode:</span> {user.zipcode}</p>
          <p><span className='bold'>hardiness zone:</span>  {user.zone}</p>
          <p><span className='bold'>last frost:</span>  {user.last_frost_short}</p>
          <button onClick={toggleClick}className='edit-button'>edit account</button>
        </div>
      </div>
    )
  }

  return (
    <>
      {!clicked && userInformation()}
      {clicked && <UserForm toggleClick={toggleClick}/>}
    </>
  )
}

export default UserInfo

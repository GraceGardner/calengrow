import React, { useState } from 'react'
import UserForm from './UserForm'
import '../Styles/UserInfo.scss'

const UserInfo = () => {

  const [ clicked, setClick ] = useState(false)

  const toggleClick = () => {
    setClick(!clicked)
  }

  const userInformation = () => {
    return(
      <div className='user-container'>
        <div className='user-header'>
          <h1>Hello username</h1>
        </div>
        <div className='user-details'>
          <p><span className='bold'>zipcode:</span> userszip</p>
          <p><span className='bold'>hardiness zone:</span>  usershardinesszone</p>
          <p><span className='bold'>last frost:</span>  lostfrostdate</p>
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

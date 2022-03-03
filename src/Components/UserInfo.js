import React, { useState } from 'react'
import UserForm from './UserForm'

const UserInfo = () => {

  const [ clicked, setClick ] = useState(false)

  const toggleClick = () => {
    setClick(!clicked)
  }

  return (
    <div className='user-container'>
     <div>
      <h1>Hello username</h1>
     </div>
     <div>
      <p>zipcode: userszip</p>
      <p>hardiness zone: usershardinesszone</p>
      <p>last frost: lostfrostdate</p>
      <button onClick={toggleClick}className='edit-button'>edit account</button>
     </div>
     {clicked && <UserForm toggleClick={toggleClick}/>}
    </div>
  )
}

export default UserInfo

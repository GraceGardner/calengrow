import React from 'react'

const UserInfo = () => {
  return (
    <div className='user-container'>
     <div>
      <h1>Hello username</h1>
     </div>
     <div>
      <p>zipcode: userszip</p>
      <p>hardiness zone: usershardinesszone</p>
      <p>last frost: lostfrostdate</p>
      <button className='edit-button'>edit account</button>
     </div>
    </div>
  )
}

export default UserInfo

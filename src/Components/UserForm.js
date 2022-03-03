import React from 'react'

const UserForm = ({toggleClick}) => {

  const submitUser = () => {
    toggleClick()
  }
  return (
    <div className='user-container'>
      <form>
        <input type='text' placeholder='name'></input>
        <input type='text' placeholder='zipcode'></input>
        <button onClick={submitUser}type="submit">Update</button>
      </form>
    </div>
  )
}

export default UserForm

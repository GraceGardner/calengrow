import React, {useContext, useState} from 'react'
import {logoutUser} from '../apiCalls'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {

  const storedUser = JSON.parse(localStorage.getItem('user')) || {}

  const [user, setUser] = useState(storedUser)

  const logout = () => {
    logoutUser(user.token)
    .then(data => {
      localStorage.setItem('user', null)
      setUser({})
    })
  }



    return(
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

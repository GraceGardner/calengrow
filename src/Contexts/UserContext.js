import React, {useContext, useState} from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {

  const storedUser = JSON.parse(localStorage.getItem('user')) || {}

  const [user, setUser] = useState(storedUser)



    return(
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

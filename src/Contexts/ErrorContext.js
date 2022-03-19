import React, {useState} from 'react'

export const ErrorContext = React.createContext()

export const ErrorProvider = ({children}) => {

  const [error, setError] = useState('')

    return(
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  )
}

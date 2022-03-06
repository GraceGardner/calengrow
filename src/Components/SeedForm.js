import React, { useState, useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import { getFilteredSeeds, addToCatalogue } from '../apiCalls.js'

const SeedForm = ({setCatalogueError, updateCatalogue}) => {

  const {user} = useContext(UserContext)
  const {setError} = useContext(ErrorContext)
  const [resData, setResData] = useState([])

  const inputSeed = (event) => {
    getFilteredSeeds(event.target.value)
    .then(data => setResData(data))
    .catch(error => setError(error))
  }

  const selectSeed = (event) => {
    event.preventDefault()
    addToCatalogue(user.token, event.target.value)
    .then(data => {
      updateCatalogue()
      })
    .catch(error => setError(error))
  }

  const addSeedDropdown =
    resData.map(seed => {
      return (
        <button
          onClick={event => selectSeed(event)}
          value={seed.id}
        >
            {seed.name}
        </button>
      )
    })

  return (
    <div className='seed-form-container'>
     <div>
      <h1>Grow your seed collection</h1>
     </div>
     <form>
      <input
        type="text"
        placeholder="Seed Name"
        onChange={event => inputSeed(event)}
      />
        <div className='seed-dropdown'>
          {resData.length > 0 && addSeedDropdown}
        </div>
     </form>
    </div>
  )
}

export default SeedForm

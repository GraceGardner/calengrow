import React, { useState, useContext } from 'react'
import {UserContext} from '../Contexts/UserContext'
import {getFilteredSeeds, addToCatalogue} from '../apiCalls.js'

const SeedForm = () => {

  const {user} = useContext(UserContext)
  const [seedString, setSeedString] = useState('')
  const [resData, setResData] = useState([])

  const inputSeed = (event) => {
    getFilteredSeeds(event.target.value)
    .then(data => setResData(data))
    .catch(error => console.log(error))
  }

  const selectSeed = (event) => {
    event.preventDefault()
    console.log(user.token)
    console.log(event.target.value)
    addToCatalogue(user.token, event.target.value)
    .then(data => console.log(data))
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
      <button type="submit">Add</button>
     </form>
    </div>
  )
}

export default SeedForm

import React, { useState } from 'react'
import {getFilteredSeeds} from '../apiCalls.js'

const SeedForm = () => {

  const [seedString, setSeedString] = useState('')
  const [resData, setResData] = useState([])

  const inputSeed = (event) => {
    getFilteredSeeds(event.target.value)
    .then(data => setResData(data))
    .catch(error => console.log(error))
  }

  const selectSeed = (event) => {
    setSeedString(event.target.value)
  }

  const addSeedDropdown =
    resData.map(seed => {
      return (<button onClick={event => selectSeed(event)}>{seed.name}</button>)
    })

  return (
    <div className='seed-form-container'>
     <div>
      <h1>Grow your seed collection</h1>
     </div>
     <form>
      <input type="text" placeholder="Seed Name" onChange={event => inputSeed(event)}/>
        <div className='seed-dropdown'>
          {resData.length > 0 && addSeedDropdown}
        </div>
      <button type="submit">Add</button>
     </form>
    </div>
  )
}

export default SeedForm

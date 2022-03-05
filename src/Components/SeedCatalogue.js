import React, { useState, useContext } from 'react'
import {UserContext} from '../Contexts/UserContext'
import CatalogueCard from './CatalogueCard'
import {getCatalogue, getFilteredSeeds} from '../apiCalls.js'

const SeedCatalogue = ({userCatalogue, setCatalogueError}) => {

  const [seedView, setSeedView] = useState(false)
  const [selectedType, setSelectedType] = useState({})

  const toggleSeedView = () => {
    setSeedView(!seedView)
  }

  const displaySeedCard = (type) => {
    toggleSeedView()
    setSelectedType(type[0])
  }

  const selectType = (event) => {
    event.preventDefault()
    getFilteredSeeds(event.target.value)
    .then(data => displaySeedCard(data))
    .catch(error => setCatalogueError(error))
  }

  const generateCatalogue = userCatalogue.map(
    type => {
      return <button
        onClick={event => selectType(event)}
        value={type.name}
      >
        {type.name}
      </button>
    }
  )

  const displayCatalogue = () => {
    if(userCatalogue.length > 0 && !seedView){
      return(
        <>
        <form>
         <input type="text" placeholder="Search Seeds.." name="search"/>
         <button type="submit">search</button>
        </form>
        <div>
        {generateCatalogue}
        </div>
        </>
      )
    }
  }


  return (
    <div className='seed-catalogue-container'>
     <div>
      <h1>Your Catalogue</h1>
     </div>
     {displayCatalogue()}
     {seedView && <CatalogueCard
     seed={selectedType}
     toggleSeedView={toggleSeedView}
     />}
     {userCatalogue.length < 1 && <p>No seeds to plant</p>}
    </div>
  )
}

export default SeedCatalogue

import React, { useState, useContext } from 'react'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import CatalogueCard from './CatalogueCard'
import {getCatalogue, getFilteredSeeds} from '../apiCalls.js'
import '../Styles/SeedCatalogue.scss'

const SeedCatalogue = ({userCatalogue}) => {

  const [seedView, setSeedView] = useState(false)
  const [selectedType, setSelectedType] = useState({})
  const [header, setHeader] = useState()
  const {setError} = useContext(ErrorContext)

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
    .then(data => {
      displaySeedCard(data)
      setHeader('seed details')
    })
    .catch(error => setError(error))
  }

  const generateCatalogue = userCatalogue.map(
    type => {
      return <button
        className='catalogue-list-button'
        key={type.id}
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
        <form className='search-catalogue-form'>
         <input
          className='search-catalogue-input'
          type="text"
          placeholder="Search Seeds.."
          name="search"
        />
        </form>
        <div className='catalogue-list-container'>
        {generateCatalogue}
        </div>
        </>
      )
    }
  }


  return (
    <div className='seed-catalogue-container'>
     <div className='seed-catalogue-header'>
      <h1>Your Catalogue</h1>
     </div>
     {displayCatalogue()}
      <div>
        {seedView &&
          <CatalogueCard
          setHeader={setHeader}
          seed={selectedType}
          toggleSeedView={toggleSeedView}
          />
        }
      </div>
     {userCatalogue.length < 1 && <p>No seeds to plant</p>}
    </div>
  )
}

export default SeedCatalogue

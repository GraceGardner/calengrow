import React, { useState, useContext } from 'react'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import CatalogueCard from './CatalogueCard'
import {getFilteredSeeds, getFilteredUserSeeds} from '../apiCalls.js'
import '../Styles/SeedCatalogue.scss'

const SeedCatalogue = ({userCatalogue, setUserCatalogue, updateCatalogue}) => {

  const [seedView, setSeedView] = useState(false)
  const [selectedType, setSelectedType] = useState({})
  const [viewAll, setViewAll] = useState(true)
  const [header, setHeader] = useState()
  const {setError} = useContext(ErrorContext)
  const {user} = useContext(UserContext)

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
      console.log(header)
    })
    .catch(error => setError(error))
  }

  const searchUserSeeds = (event) => {
    event.preventDefault()
    getFilteredUserSeeds(event.target.value, user.token)
    .then(data => {
      setUserCatalogue(data)
      setViewAll(false)
    })
  }

  const clearSearch = () => {
    updateCatalogue()
    setViewAll(true)
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
          onChange={event => searchUserSeeds(event)}
        />
        {!viewAll &&
          <button
            className='clear-button'
            onClick={clearSearch}
          >view all seeds</button>}
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

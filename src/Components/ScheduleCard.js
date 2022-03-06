import React, { useContext } from 'react'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import {patchPlant, getFilteredSeeds} from '../apiCalls.js'
import '../Styles/ScheduleCard.scss'

const ScheduleCard = (card) => {
  const {setError} = useContext(ErrorContext)
  const {user} = useContext(UserContext)

  const plant = (event, currentId) => {
    let selectedButton = document.getElementById(event.target.id)

    patchPlant(user.token, currentId)
    .then(data => {
      selectedButton.innerHTML = "Planted!"
      selectedButton.disabled = true
    })
    .catch(error => setError(error))
  }

  const displaySeedsForDate = card.seeds.map(seed => {
    if(!seed.planted){
      return (
        <div key={seed.id} className='plant-button-container'>
          <p>{seed.name}</p>
          <button
            id={seed.id}
            value={seed.name}
            className='plant-button'
            onClick={event => plant(event, seed.id)}
          >
            plant
          </button>
        </div>
      )} else if (seed.planted) {
        return (
          <div key={seed.id} className='plant-button-container'>
            <p>{seed.name}</p>
            <button
              id={seed.id}
              value={seed.name}
              className='plant-button'
              disabled = 'true'
            >
              planted!
            </button>
          </div>
        )
      }
    }
  )

  return (
    <div className='schedule-card-container'>
     <div className='card-date-container'>
      <p>{card.date}</p>
     </div>
     <div className='card-list-container'>
      {displaySeedsForDate}
     </div>
    </div>
  )
}

export default ScheduleCard

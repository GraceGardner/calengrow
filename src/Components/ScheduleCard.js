import React, {useContext} from 'react'
import {UserContext} from '../Contexts/UserContext'
import '../Styles/ScheduleCard.scss'

const ScheduleCard = (card) => {

  const displaySeedsForDate = card.seeds.map((seed, i) => {
      return (
        <p key={i}>{seed}</p>
      )
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

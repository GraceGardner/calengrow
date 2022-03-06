import React, {useContext} from 'react'
import {UserContext} from '../Contexts/UserContext'

const ScheduleCard = (card) => {

  const displaySeedsForDate = card.seeds.map(seed => {
      return (
        <p>{seed}</p>
      )
    }
  )

  return (
    <div className='next-card-container'>
     <div>
      <p>{card.date}</p>
     </div>
     <div>
      {displaySeedsForDate}
     </div>
    </div>
  )
}

export default ScheduleCard

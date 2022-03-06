import React, {useContext} from 'react'
import {UserContext} from '../Contexts/UserContext'

const ScheduleCard = ({card}) => {

  // const displaySeedList = () => {
  //   card.seeds.map(
  //     return(
  //
  //     )
  //   )
  // }

  return (
    <div className='next-card-container'>
     <div>
      <p>{card.date}</p>
     </div>
     <div>Seeds for planting</div>
    </div>
  )
}

export default ScheduleCard

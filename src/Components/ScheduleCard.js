import React, {useContext} from 'react'
import {UserContext} from '../Contexts/UserContext'

const ScheduleCard = ({seed}) => {
  const {user} = useContext(UserContext)

  console.log(seed)

  return (
    <div className='next-card-container'>
     <div>
      <p>Date</p>
     </div>
     <div>Seeds for planting</div>
    </div>
  )
}

export default ScheduleCard

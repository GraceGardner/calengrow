import React, {useContext, useEffect} from 'react'
import ScheduleCard from './ScheduleCard'
import {UserContext} from '../Contexts/UserContext'

const SeedSchedule = () => {
  const {user} = useContext(UserContext)

  useEffect(() => {
    getCatalogue(user.token)
    .then(data => (data))
  })

  return (
    <div className='schedule-container'>

    </div>
  )
}

export default SeedSchedule

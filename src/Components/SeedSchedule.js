import React, {useContext, useEffect, useState} from 'react'
import ScheduleCard from './ScheduleCard'
import {UserContext} from '../Contexts/UserContext'
import {getCatalogue} from '../apiCalls'

const SeedSchedule = () => {
  const {user} = useContext(UserContext)
  const [seedsInCatalogue, setSeedsInCatalogue] = useState([])

  useEffect(() => {
    getCatalogue(user.token)
    .then(data => (data))
  })

  const displaySchedule = (seeds) => {
    seeds.map(seed => {
      return (
        <ScheduleCard seed={seed}/>
      )
    })
  }

  return (
    <div className='schedule-container'>
      {seedsInCatalogue.length < 1 && <h2>No Seeds to Plant</h2>}
    </div>
  )
}

export default SeedSchedule

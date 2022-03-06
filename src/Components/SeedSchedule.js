import React, {useContext, useEffect, useState} from 'react'
import ScheduleCard from './ScheduleCard'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import {getCatalogue} from '../apiCalls'

const SeedSchedule = () => {
  const {user} = useContext(UserContext)
  const {setError} = useContext(ErrorContext)
  const [seedsInCatalogue, setSeedsInCatalogue] = useState([])

  useEffect(() => {
    if(user.token) {
    getCatalogue(user.token)
    .then(data => setSeedsInCatalogue(data))
    .catch(error => setError(error))
    }
  })

  const displaySchedule =
    seedsInCatalogue.map(seed => {
      return (
        <ScheduleCard key={seed.id} seed={seed}/>
      )
    })

  return (
    <div className='schedule-container'>
      {seedsInCatalogue.length < 1 && <h2>No Seeds to Plant</h2>}
      {seedsInCatalogue > 0 && displaySchedule}
    </div>
  )
}

export default SeedSchedule

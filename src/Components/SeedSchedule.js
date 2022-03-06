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

  const formatDate = (date) => {
    let [month, day, year] = date.split('-');
    return [year, month, day].join('-');
  }

  const getNumberDays = (string) => {
    return parseInt(string.slice(0, 1)) * 7
  }

  const getMultipleDays = (string) => {
    return parseInt(string.slice(5, 6)) * 7
  }

  const changeMonthsToDays = (string) => {
    return parseInt(string.slice(0, 1)) * 30
  }


 const findPlantDate = (type) => {
  const lastFrost = formatDate(user.last_frost)
  let plantDate;
  if (type.planting_date.length > 15 && type.planting_date.includes('before')){
    plantDate = - getMultipleDays(type.planting_date)
  } else if (type.planting_date.length > 15 && type.planting_date.includes('after')){
    plantDate = getMultipleDays(type.planting_date)
  } else if(type.planting_date.includes('week') && type.planting_date.includes('before')){
    plantDate = - getNumberDays(type.planting_date)
  } else if(type.planting_date.includes('week') && type.planting_date.includes('after')){
    plantDate = getNumberDays(type.planting_date)
  } else if (type.planting_date.includes('month') && type.planting_date.includes('before')){
    plantDate = - changeMonthsToDays(type.planting_date)
  } else if (type.planting_date.includes('month') && type.planting_date.includes('after')){
    plantDate = changeMonthsToDays(type.planting_date)
  }
  let plantingDatestamp = new Date(lastFrost).setDate(plantDate)
  return new Date(plantingDatestamp)
 }

  const createSchedule = () => {
    const result = seedsInCatalogue.reduce((acc, seed) => {
      let date = findPlantDate(seed)
      if(acc[date]){
        acc[date].push(seed.name)
      } else if (!acc[date]){
        acc[date] = [seed.name]
      }
      return acc
    }, {})
    return result
  }

  const displaySchedule = () => {
    const schedule = createSchedule()
    const keys = Object.keys(schedule)
    return keys.map(key => {
      return (
        <ScheduleCard key={key} date={key} seeds={schedule[key]}/>
      )
    })
  }

  return (
    <div className='schedule-container'>
      {seedsInCatalogue.length < 1 && <h2>No Seeds to Plant</h2>}
      {seedsInCatalogue.length > 0 && displaySchedule()}
    </div>
  )
}

export default SeedSchedule

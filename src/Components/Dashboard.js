import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import SeedSchedule from './SeedSchedule'
import logo from '../assets/calengrow-logo.png'

const Dashboard= () => {
  return (
    <div className='dashboard-container'>
     <div>
      <Link to={'/'}>
        <img
        className='logo'
        src={logo}
        alt='Calengrow Logo'
        />
      </Link>
       <Link to={'/catalogue'}>
        <button className='catalogue-button'>your catalogue</button>
       </Link>
     </div>
     <div className='dashboard-main'>
      <UserInfo/>
      <SeedSchedule/>
     </div>
    </div>
  )
}

export default Dashboard

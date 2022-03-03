import React from 'react'
import UserInfo from './UserInfo'
import SeedSchedule from './SeedSchedule'
import logo from '../assets/calengrow-logo.png'

const Dashboard= () => {
  return (
    <div className='dashboard-container'>
     <div>
       <img
         className='logo'
         src={logo}
         alt='Calengrow Logo'
       />
       <button className='catalogue-button'>your catalogue</button>
     </div>
     <div class='dashboard-main'>
      <UserInfo/>
      <SeedSchedule/>
     </div>
    </div>
  )
}

export default Dashboard

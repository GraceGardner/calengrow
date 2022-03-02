import React from 'react'
import UserInfo from 'UserInfo'
import SeedSchedule from 'SeedSchedule'

const Dashboard= () => {
  return (
    <div className='dashboard-container'>
     <div>
       <img
         className='logo'
         src={logo}
         alt='Calengrow Logo'
       />
     </div>
     <div class='dashboard-main'>
      <UserInfo/>
      <SeedSchedule/>
     </div>
    </div>
  )
}

export default Dashboard

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import ErrorModal from './ErrorModal'
import SeedSchedule from './SeedSchedule'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import '../Styles/Dashboard.scss'

const Dashboard = () => {
  const [dashboardError, setDashboardError] = useState()

  return (
    <>
    <div className='dashboard-container'>
    <div className='dashboard-header'>
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
     <SeedSchedule setDashboardError={setDashboardError}/>
    </div>
    </div>
    {dashboardError && <ErrorModal error={dashboardError}/>}
    <Background/>
    <Grass/>
    </>
  )
}

export default Dashboard

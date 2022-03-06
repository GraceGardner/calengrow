import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import SeedSchedule from './SeedSchedule'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import '../Styles/Dashboard.scss'

const Dashboard = () => {

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
     <div className='schedule-scroll-container'>
      <div className='schedule-scroll-header-container'>
        <h2>Your Planting Schedule</h2>
      </div>
      <SeedSchedule/>
     </div>
    </div>
    </div>
    <Background/>
    <Grass/>
    </>
  )
}

export default Dashboard

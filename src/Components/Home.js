import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/calengrow-logo.png'
import SidePanel from './SidePanel'
import NextCard from './NextCard'

const Home = () => {
  const navigate = useNavigate()



  return (
    <div className='home-container'>
      <SidePanel />
      <div>
        <img
          className='logo'
          src={logo}
          alt='Calengrow Logo'
        />
        <h1>Let's get growing</h1>
        <button onClick={navigate('/dashboard')} className='account-button'>your account</button>
        <h2>Your next planting</h2>
        <NextCard />
      </div>
    </div>
  )
}

export default Home

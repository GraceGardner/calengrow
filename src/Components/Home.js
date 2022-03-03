import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/calengrow-logo.png'
import SidePanel from './SidePanel'
import NextCard from './NextCard'
import '../Styles/Home.scss'

const Home = () => {



  return (
    <div className='home-container'>
      <SidePanel />
      <div className='right-home-container'>
        <img
          className='logo'
          src={logo}
          alt='Calengrow Logo'
        />
        <h1>Let's get growing</h1>
        <Link to={'/dashboard'}>
          <button className='account-button'>your account</button>
        </Link>
        <h2>Your next planting</h2>
        <NextCard />
      </div>
    </div>
  )
}

export default Home

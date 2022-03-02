import React from 'react'
import SidePanel from 'SidePanel'
import NextCard from 'NextCard'
import logo from '../assets/calengrow-logo.png'

const Home = () => {
  return (
    <div className='home-container'>
      <SidePanel />
      <div>
        <img
          className='logo'
          src={logo}
          alt='Calengrow Logo'
        />
        <h2>Let's get growing<h2>
        <button className='account-button'>your account</button>
        <NextCard />
      </div>
    </div>
  )
}

export default Home

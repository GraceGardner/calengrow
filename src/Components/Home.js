import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/calengrow-logo.png'
import ErrorModal from './ErrorModal'
import SidePanel from './SidePanel'
import NextCard from './NextCard'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {UserContext} from '../Contexts/UserContext'
import '../Styles/Home.scss'

const Home = () => {
  const [homeError, setHomeError] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [signup, setSignup] = useState(false)
  const {user} = useContext(UserContext)

  const toggleSignup = () => {
    setSignup(!signup)
  }

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn)
  }

  const display = () => {
    if(user.token){
      return(
        <>
        <Link to={'/dashboard'}>
          <button className='account-button'>your account</button>
        </Link>
        <div className='next-planting'>
        <h2>Your next planting</h2>
        <NextCard />
        </div>
        </>
      )
    } else {
      return (
      <>
        <button className='sign-up-button' onClick={toggleSignup}>sign up</button>
        <button className='sign-up-button' onClick={toggleLoggedIn}>login</button>
      </>
      )
    }
  }


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
        {display()}
        {signup && <SignupForm setHomeError={setHomeError}/>}
        {loggedIn && <LoginForm setHomeError={setHomeError}/>}
      </div>
      {homeError = <ErrorModal error={homeError}/>}
    </div>
  )
}

export default Home

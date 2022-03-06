import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/calengrow-logo.png'
import SidePanel from './SidePanel'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Grass from './Grass'
import {UserContext} from '../Contexts/UserContext'
import '../Styles/Home.scss'

const Home = () => {
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
        {signup && <SignupForm/>}
        {loggedIn && <LoginForm/>}
      </div>
      <Grass/>
    </div>
  )
}

export default Home

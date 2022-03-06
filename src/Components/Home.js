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
  const {user, logout} = useContext(UserContext)

  const toggleSignup = () => {
    setSignup(!signup)
    setLoggedIn(false)
  }

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn)
    setSignup(false)
  }

  const display = () => {
    if(user.token){
      return(
        <div className='account-buttons-container'>
          <Link to={'/dashboard'}>
            <button className='account-button'>your account</button>
          </Link>
          <button
            className='home-logout-button'
            onClick={logout}
          >logout</button>
        </div>
      )
    } else {
      return (
      <div className='user-buttons-container'>
        <button className='sign-up-button' onClick={toggleSignup}>sign up</button>
        <button className='login-button' onClick={toggleLoggedIn}>login</button>
      </div>
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
        {signup &&
          <SignupForm toggleSignup={toggleSignup}/>
        }
        {loggedIn &&
          <LoginForm toggleLoggedIn={toggleLoggedIn}/>
        }
      </div>
      <Grass/>
    </div>
  )
}

export default Home

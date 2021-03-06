import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../Contexts/UserContext'
import {ErrorContext} from '../Contexts/ErrorContext'
import { Link, useNavigate } from 'react-router-dom'

import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import {getCatalogue} from '../apiCalls.js'
import '../Styles/CatalogueView.scss'

const CatalogueView= () => {
    const {user} = useContext(UserContext)
    const {setError} = useContext(ErrorContext)
    const [userCatalogue, setUserCatalogue] = useState([])
    const navigate = useNavigate()

    const updateCatalogue = () => {
      getCatalogue(user.token)
      .then(data => setUserCatalogue(data))
      .catch(error => setError(error))
    }

    useEffect(() => {
      if(!user.token){
        return navigate('/')
      }
      updateCatalogue()
    }, [])

  return (
    <>
    <div className='catalogue-view-container'>
     <div className='catalogue-view-header'>
      <Link to={'/'}>
        <img
        className='logo-button'
        src={logo}
        alt='Calengrow Logo'
        />
      </Link>
       <Link to={'/dashboard'}>
        <button className='account-button'>your account</button>
       </Link>
     </div>
     <div className='catalogue-view-main'>
      <SeedForm updateCatalogue={updateCatalogue}/>
      <SeedCatalogue
        userCatalogue={userCatalogue}
        setUserCatalogue={setUserCatalogue}
        updateCatalogue={updateCatalogue}
      />
     </div>
    </div>
    <Background/>
    <Grass/>
    </>
  )
}

export default CatalogueView

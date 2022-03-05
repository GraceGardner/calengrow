import React, { useState, useContext, useEffect } from 'react'
import {UserContext} from '../Contexts/UserContext'
import { Link } from 'react-router-dom'
import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import ErrorModal from './ErrorModal'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import {getCatalogue} from '../apiCalls.js'
import '../Styles/CatalogueView.scss'

const CatalogueView= () => {
    const [catalogueError, setCatalogueError] = useState()
    const {user} = useContext(UserContext)
    const[userCatalogue, setUserCatalogue] = useState([])

    const updateCatalogue = () => {
      getCatalogue(user.token)
      .then(data => setUserCatalogue(data))
      .catch(error => setCatalogueError(error))
    }

    useEffect(() => {
      updateCatalogue()
    },[])

  return (
    <>
    <div className='catalogue-view-container'>
     <div>
      <Link to={'/'}>
        <img
        className='logo'
        src={logo}
        alt='Calengrow Logo'
        />
      </Link>
       <Link to={'/dashboard'}>
        <button className='account-button'>your account</button>
       </Link>
     </div>
     <div className='catalogue-view-main'>
      <SeedForm setCatalogueError={setCatalogueError}
      updateCatalogue={updateCatalogue}/>
      <SeedCatalogue userCatalogue={userCatalogue} setCatalogueError={setCatalogueError}/>
     </div>
    </div>
    {catalogueError && <ErrorModal error={catalogueError}/>}
    <Background/>
    <Grass/>
    </>
  )
}

export default CatalogueView

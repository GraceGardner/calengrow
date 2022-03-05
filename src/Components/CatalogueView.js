import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import ErrorModal from './ErrorModal'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import '../Styles/CatalogueView.scss'

const CatalogueView= () => {
    const [catalogueError, setCatalogueError] = useState()

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
      <SeedForm setCatalogueError={setCatalogueError}/>
      <SeedCatalogue setCatalogueError={setCatalogueError}/>
     </div>
    </div>
    {catalogueError && <ErrorModal error={catalogueError}/>}
    <Background/>
    <Grass/>
    </>
  )
}

export default CatalogueView

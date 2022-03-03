import React from 'react'
import { Link } from 'react-router-dom'
import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import logo from '../assets/calengrow-logo.png'

const CatalogueView= () => {
  return (
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
      <SeedForm/>
      <SeedCatalogue/>
     </div>
    </div>
  )
}

export default CatalogueView

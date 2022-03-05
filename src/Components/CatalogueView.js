import React from 'react'
import { Link } from 'react-router-dom'
import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import Background from './Background'
import Grass from './Grass'
import logo from '../assets/calengrow-logo.png'
import '../Styles/CatalogueView.scss'

const CatalogueView= () => {
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
      <SeedForm/>
      <SeedCatalogue/>
     </div>
    </div>
    <Background/>
    <Grass/>
    </>
  )
}

export default CatalogueView

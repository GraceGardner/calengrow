import React from 'react'
import SeedForm from './SeedForm'
import SeedCatalogue from './SeedCatalogue'
import logo from '../assets/calengrow-logo.png'

const CatalogueView= () => {
  return (
    <div className='catalogue-view-container'>
     <div>
       <img
         className='logo'
         src={logo}
         alt='Calengrow Logo'
       />
       <button className='account-button'>your account</button>
     </div>
     <div class='catalogue-view-main'>
      <SeedForm/>
      <SeedCatalogue/>
     </div>
    </div>
  )
}

export default CatalogueView

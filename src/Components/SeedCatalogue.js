import React from 'react'

const SeedCatalogue = () => {
  return (
    <div className='seed-catalogue-container'>
     <div>
      <h1>Your Catalogue</h1>
     </div>
     <form>
      <input type="text" placeholder="Search Seeds.." name="search">
      <button type="submit">???</button>
     </form>
     <div>Seeds for planting</div>
    </div>
  )
}

export default SeedCatalogue

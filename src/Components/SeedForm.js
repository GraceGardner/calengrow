import React from 'react'

const SeedForm = () => {
  return (
    <div className='seed-form-container'>
     <div>
      <h1>Grow your seed collection</h1>
     </div>
     <form>
      <input type="text" placeholder="Seed Name">
      <button type="submit">Add</button>
     </form>
    </div>
  )
}

export default SeedForm

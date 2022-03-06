import React from 'react'

const CatalogueCard = ({seed, toggleSeedView, setHeader}) => {

  const toCatalogue = () => {
    setHeader('Your Catalogue')
    toggleSeedView()
  }
  return(
    <div className='full-seed-card'>
      <div className='catalogue-card-container'>
        {seed.name && <p><span className='bold'>name:</span>{seed.name}</p>}
        {seed.botanical_name && <p><span className='bold'>botanical name:</span>{seed.botanical_name}</p>}
        {seed.height && <p><span className='bold'>height:</span>{seed.height}</p>}
        {seed.spacing && <p><span className='bold'>spacing:</span>{seed.spacing}</p>}
        {seed.depth && <p><span className='bold'>depth:</span>{seed.depth}</p>}
        {seed.spread && <p><span className='bold'>spread:</span>{seed.spread}</p>}
        {seed.light_required && <p><span className='bold'>light required:</span>{seed.light_required}</p>}
        {seed.pollinator && <p><span className='bold'>pollinator:</span>{seed.pollinator}</p>}
        {seed.yield && <p><span className='bold'>yield:</span>{seed.yield}</p>}
        {seed.color && <p><span className='bold'>color:</span>{seed.color}</p>}
        {seed.blooms && <p><span className='bold'>blooms:</span>{seed.blooms}</p>}
        {seed.fruit && <p><span className='bold'>fruit:</span>{seed.fruit}</p>}
        {seed.days_to_maturity && <p><span className='bold'>days to maturity:</span>{seed.days_to_maturity}</p>}
        {seed.zone && <p><span className='bold'>zone:</span>{seed.zone}</p>}
        {seed.germination && <p><span className='bold'>germination:</span>{seed.germination}</p>}
        {seed.form && <p><span className='bold'>form:</span>{seed.form}</p>}
        {seed.flower_form && <p><span className='bold'>flower form:</span>{seed.flower_form}</p>}
        {seed.soil_requirements && <p><span className='bold'>soil requirements:</span>{seed.soil_requirements}</p>}
        {seed.growth_rate && <p><span className='bold'>growth rate:</span>{seed.growth_rate}</p>}
        {seed.pruning && <p><span className='bold'>pruning:</span>{seed.pruning}</p>}
        {seed.foliage && <p><span className='bold'>foliage:</span>{seed.foliage}</p>}
      </div>
      <div className='seed-view-button-container'>
        <button
        className='seed-view-button'
        onClick={toCatalogue}
        >
        return to catalogue
        </button>
      </div>
    </div>
  )
}

export default CatalogueCard

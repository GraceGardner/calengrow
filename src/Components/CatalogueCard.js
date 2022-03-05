import React from 'react'

const CatalogueCard = ({seed, toggleSeedView}) => {


  return(
    <div className='full-seed-card'>
      <div>
        <p><span className='bold'>name:</span>{seed.name}</p>
        <p><span className='bold'>botanical name:</span>{seed.botanical_name}</p>
        <p><span className='bold'>height:</span>{seed.height}</p>
        <p><span className='bold'>spacing:</span>{seed.spacing}</p>
        <p><span className='bold'>depth:</span>{seed.depth}</p>
        <p><span className='bold'>spread:</span>{seed.spread}</p>
        <p><span className='bold'>light required:</span>{seed.light_required}</p>
        <p><span className='bold'>pollinator:</span>{seed.pollinator}</p>
        <p><span className='bold'>yield:</span>{seed.yield}</p>
        <p><span className='bold'>color:</span>{seed.color}</p>
        <p><span className='bold'>blooms:</span>{seed.blooms}</p>
        <p><span className='bold'>fruit:</span>{seed.fruit}</p>
        <p><span className='bold'>days to maturity:</span>{seed.days_to_maturity}</p>
        <p><span className='bold'>zone:</span>{seed.zone}</p>
        <p><span className='bold'>germination:</span>{seed.germination}</p>
        <p><span className='bold'>form:</span>{seed.form}</p>
        <p><span className='bold'>flower form:</span>{seed.flower_form}</p>
        <p><span className='bold'>soil requirements:</span>{seed.soil_requirements}</p>
        <p><span className='bold'>growth rate:</span>{seed.growth_rate}</p>
        <p><span className='bold'>pruning:</span>{seed.pruning}</p>
        <p><span className='bold'>foliage:</span>{seed.foliage}</p>
      </div>
      <button className='seed-view-button' onClick={toggleSeedView}>return to catalogue</button>
    </div>
  )
}

export default CatalogueCard

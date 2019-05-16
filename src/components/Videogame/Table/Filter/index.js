import React from 'react'

const VideogameFilter = (props) => {
  const { placeholder, filterText, filterName, filterVideogames } = props
  return (
    <input
      type='text'
      onChange={filterVideogames}
      value={filterText}
      placeholder={placeholder}
      name={filterName}
      className='input-search'
    />
  )
}

export default VideogameFilter

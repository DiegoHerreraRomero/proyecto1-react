import React from 'react'

const PlatformFilter = (props) => {
  const { placeholder, filterText, filterName, filterPlatforms } = props
  return (
    <input
      type='text'
      onChange={filterPlatforms}
      value={filterText}
      placeholder={placeholder}
      name={filterName}
      className='input-search'
    />
  )
}

export default PlatformFilter

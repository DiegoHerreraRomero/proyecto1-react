import React from 'react'
import { connect } from 'react-redux'
import {
  removePlatform as removePlatformCreator,
  filterPlatforms as filterPlatformsCreator
} from '../../../redux/platforms'
import PlatformTable from '../../../components/Platform/Table'

const PlatformTableContainer = (props) => {
  const { platforms, filters, removePlatform, filterPlatforms } = props

  return (
    <PlatformTable
      platforms={platforms}
      removePlatform={removePlatform}
      filters={filters}
      filterPlatforms={filterPlatforms}
    />
  )
}

const mapStateToProps = state => {
  const { platforms, filters } = state.platform
  const filterPlatforms = platforms.filter(paltform => {
    return (
      paltform.name.includes(filters['name']) &&
      paltform.abbreviature.includes(filters['abbreviature'])
    )
  })
  console.log(filterPlatforms)
  return {
    platforms: filterPlatforms,
    filters
  }
}

const mapDispatchToProps = {
  removePlatform: removePlatformCreator,
  filterPlatforms: filterPlatformsCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(PlatformTableContainer)

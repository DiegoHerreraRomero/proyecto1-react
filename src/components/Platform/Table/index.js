import React from 'react'
import PlatformRow from './Row'
import PlatformFilter from './Filter'

const PlatformTable = (props) => {
  const { platforms, editPlatform, removePlatform, filters, filterPlatforms } = props
  return (
    <div>
      <h2>Plataformas</h2>
      <table>
        <thead>
          <tr>
            <th>
              <PlatformFilter
                placeholder='Buscar nombre...'
                filterText={filters['name']}
                filterName='name'
                filterPlatforms={filterPlatforms}
              />
            </th>
            <th>
              <PlatformFilter
                placeholder='Buscar abreviatura...'
                filterText={filters['abbreviature']}
                filterName='abbreviature'
                filterPlatforms={filterPlatforms}
              />
            </th>
            <th rowSpan='2'>Acciones</th>
          </tr>
          <tr>
            <th>Nombre</th>
            <th>Abreviatura</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map(platform => {
            return (
              <PlatformRow
                key={platform.id}
                platform={platform}
                editPlatform={editPlatform}
                removePlatform={removePlatform}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlatformTable

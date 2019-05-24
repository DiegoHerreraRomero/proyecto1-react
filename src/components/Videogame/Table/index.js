import React from 'react'
import VideogameRow from './Row'
import VideogameFilter from './Filter'

const VideogameTable = (props) => {
  const { videogames, platformsList, editVideogame, removeVideogame, filters, filterVideogames } = props
  return (
    <div>
      <h2>Videojuegos</h2>
      <table>
        <thead>
          <tr>
            <th>
              <VideogameFilter
                placeholder='Buscar nombre...'
                filterText={filters['name']}
                filterName='name'
                filterVideogames={filterVideogames}
              />
            </th>
            <th>
              <VideogameFilter
                placeholder='Buscar año...'
                filterText={filters['year']}
                filterName='year'
                filterVideogames={filterVideogames}
              />
            </th>
            <th>
              <VideogameFilter
                placeholder='Buscar compañia...'
                filterText={filters['company']}
                filterName='company'
                filterVideogames={filterVideogames}
              />
            </th>
            <th>
              <VideogameFilter
                placeholder='Buscar plataformas...'
                filterText={filters['platforms']}
                filterName='platforms'
                filterVideogames={filterVideogames}
              />
            </th>
            <th>
              <VideogameFilter
                placeholder='Buscar personaje...'
                filterText={filters['principalCharacter']}
                filterName='principalCharacter'
                filterVideogames={filterVideogames}
              />
            </th>
            <th rowSpan='2'>Acciones</th>
          </tr>
          <tr>
            <th>Nombre</th>
            <th>Año</th>
            <th>Compañia</th>
            <th>Plataformas</th>
            <th>Personaje Principal</th>
          </tr>
        </thead>
        <tbody>
          {videogames.map(videogame => {
            return (
              <VideogameRow
                key={videogame.id}
                videogame={videogame}
                editVideogame={editVideogame}
                removeVideogame={removeVideogame}
                platformsList={platformsList}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default VideogameTable

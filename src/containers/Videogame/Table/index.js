import React from 'react'
import { connect } from 'react-redux'
import {
  removeVideogame as removeVideogameCreator,
  filterVideogames as filterVideogamesCreator
} from '../../../redux/videogames'
import VideogameTable from '../../../components/Videogame/Table'

const VideogameTableContainer = (props) => {
  const { videogames, platformsList, filters, removeVideogame, filterVideogames } = props

  return (
    <VideogameTable
      videogames={videogames}
      removeVideogame={removeVideogame}
      filters={filters}
      filterVideogames={filterVideogames}
      platformsList={platformsList}
    />
  )
}

const mapStateToProps = state => {
  const { videogames, filters } = state.videogame
  const { platforms: platformsList } = state.platform
  const filterVideogames = videogames.filter(videogame => {
    return (
      videogame.name.includes(filters['name']) &&
      videogame.company.includes(filters['company']) &&
      videogame.year.includes(filters['year']) &&
      videogame.principalCharacter.includes(filters['principalCharacter']) &&
      platformsList.filter(pf => pf.id === videogame.platforms)[0].name.includes(filters['platforms'])
    )
  })
  return {
    videogames: filterVideogames,
    platformsList,
    filters
  }
}

const mapDispatchToProps = {
  removeVideogame: removeVideogameCreator,
  filterVideogames: filterVideogamesCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(VideogameTableContainer)

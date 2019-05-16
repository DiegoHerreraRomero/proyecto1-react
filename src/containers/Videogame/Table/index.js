import React from 'react'
import { connect } from 'react-redux'
import {
  removeVideogame as removeVideogameContainer,
  filterVideogames as filterVideogamesContainer
} from '../../../redux/videogames'
import VideogameTable from '../../../components/Videogame/Table'

const VideogameTableContainer = (props) => {
  const { videogames, editVideogame, removeVideogame, filters, filterVideogames } = props

  return (
    <VideogameTable
      videogames={videogames}
      editVideogame={editVideogame}
      removeVideogame={removeVideogame}
      filters={filters}
      filterVideogames={filterVideogames}
    />
  )
}

const mapStateToProps = state => {
  const { videogames, filters } = state
  const filterVideogames = videogames.filter(videogame => {
    return (
      videogame.name.includes(filters['name']) &&
      videogame.company.includes(filters['company']) &&
      videogame.year.includes(filters['year']) &&
      videogame.platforms.includes(filters['platforms']) &&
      videogame.principalCharacter.includes(filters['principalCharacter'])
    )
  })
  return {
    videogames: filterVideogames,
    filters
  }
}

const mapDispatchToProps = {
  removeVideogame: removeVideogameContainer,
  filterVideogames: filterVideogamesContainer
}

export default connect(mapStateToProps, mapDispatchToProps)(VideogameTableContainer)

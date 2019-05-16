const SUBMIT_VIDEOGAME = 'SUBMIT_VIDEOGAME'
const REMOVE_VIDEOGAME = 'REMOVE_VIDEOGAME'
const FILTER_VIDEOGAMES = 'FILTER_VIDEOGAMES'

export const submitVideogame = videogame => {
  return ({
    type: SUBMIT_VIDEOGAME,
    payload: {
      videogame
    }
  })
}

export const removeVideogame = id => {
  return ({
    type: REMOVE_VIDEOGAME,
    payload: {
      id
    }
  })
}

export const filterVideogames = e => {
  return ({
    type: FILTER_VIDEOGAMES,
    payload: {
      filterText: e.target.value,
      filterName: e.target.name
    }
  })
}

export default (state = initialState, action) => {
  let { videogames } = state
  switch (action.type) {
    case SUBMIT_VIDEOGAME:
      let { videogame } = action.payload
      let id = videogame.id
      if (id === '') {
        const ids = videogames.map(videogame => {
          return videogame.id
        })
        id = Math.max(...ids) + 1
        videogame = {
          ...videogame,
          id: id
        }
        videogames.push(videogame)
      } else {
        const index = videogames.findIndex(videogame => videogame.id === id)
        videogames[index] = {
          ...videogames[index],
          ...videogame
        }
      }
      return {
        ...state,
        videogames: videogames
      }
    case REMOVE_VIDEOGAME:
      const { id: idToRemove } = action.payload
      const videogamesRemoved = videogames.filter(videogame => videogame.id !== idToRemove)
      return {
        ...state,
        videogames: videogamesRemoved
      }
    case FILTER_VIDEOGAMES:
      const { filterText, filterName } = action.payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: filterText
        }
      }
    default: return state
  }
}

const initialState = {
  videogames: [
    { id: 1, name: 'Super Mario Bros', year: '1985', company: 'Nintendo', platforms: 'NES', principalCharacter: 'Mario' },
    { id: 2, name: 'Sonic the Hedgehog', year: '1991', company: 'Sega', platforms: 'Sega Mega Drive', principalCharacter: 'Sonic' },
    { id: 3, name: 'Donkey Kong Country', year: '1994', company: 'Rare', platforms: 'SNES', principalCharacter: 'Donkey Kong' }
  ],
  filters: {
    name: '',
    year: '',
    company: '',
    platforms: '',
    principalCharacter: ''
  }
}

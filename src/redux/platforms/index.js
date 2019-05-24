const SUBMIT_PLATFORM = 'SUBMIT_PLATFORM'
const REMOVE_PLATFORM = 'REMOVE_PLATFORM'
const FILTER_PLATFORMS = 'FILTER_PLATFORMS'

export const submitPlatform = platform => {
  return ({
    type: SUBMIT_PLATFORM,
    payload: {
      platform
    }
  })
}

export const removePlatform = id => {
  return ({
    type: REMOVE_PLATFORM,
    payload: {
      id
    }
  })
}

export const filterPlatforms = e => {
  return ({
    type: FILTER_PLATFORMS,
    payload: {
      filterText: e.target.value,
      filterName: e.target.name
    }
  })
}

export default (state = initialState, action) => {
  let { platforms } = state
  switch (action.type) {
    case SUBMIT_PLATFORM:
      let { platform } = action.payload
      let id = platform.id
      if (id === '') {
        const ids = platforms.map(platform => {
          return platform.id
        })
        id = Math.max(...ids) + 1
        platform = {
          ...platform,
          id: id
        }
        platforms.push(platform)
      } else {
        const index = platforms.findIndex(platform => platform.id === id)
        platforms[index] = {
          ...platforms[index],
          ...platform
        }
      }
      return {
        ...state,
        platforms: platforms
      }
    case REMOVE_PLATFORM:
      const { id: idToRemove } = action.payload
      const platformsRemoved = platforms.filter(platform => platform.id !== idToRemove)
      return {
        ...state,
        platforms: platformsRemoved
      }
    case FILTER_PLATFORMS:
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
  platforms: [
    { id: 1, name: 'Nintendo Entertainment System', abbreviature: 'NES' },
    { id: 2, name: 'Super Nintendo Entertainment System', abbreviature: 'SNES' },
    { id: 3, name: 'Sega Mega Drive', abbreviature: 'Mega Drive' },
    { id: 4, name: 'Playstation One', abbreviature: 'PSX' }
  ],
  filters: {
    name: '',
    abbreviature: ''
  }
}

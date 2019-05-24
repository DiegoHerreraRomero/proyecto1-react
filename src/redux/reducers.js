import VideogameReducer from './videogames/'
import PlatformReducer from './platforms'
import { combineReducers } from 'redux'

export default combineReducers({ videogame: VideogameReducer, platform: PlatformReducer })

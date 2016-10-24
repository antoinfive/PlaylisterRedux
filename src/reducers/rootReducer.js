import { combineReducers } from 'redux'
import playlists from './playlistReducer'

const rootReducer = combineReducers({
  playlists
})

export default rootReducer

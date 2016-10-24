import { combineReducers } from 'redux'
import PlaylistsReducer from './reducer_playlists'
import ActivePlaylist from './reducer_active_playlist'

const rootReducer = combineReducers({
  playlists: PlaylistsReducer,
  activePlaylist: ActivePlaylist
});

export default rootReducer

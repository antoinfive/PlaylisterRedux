export function selectPlaylist(playlist) {
  return { 
    type: 'PLAYLIST_SELECTED', 
    payload: playlist
  }
}

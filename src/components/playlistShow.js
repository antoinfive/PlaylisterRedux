import React from 'react'
import configureStore from '../store/configureStore.js'

const store = configureStore();
const playlists = store.getState().playlists
const PlaylistShow = () => {
  const playlistData = playlists.map( (list) => {

    return ( 
    <ul> 
      <li> 
        {list.name}
      </li>
      <li>
        {list.author}
      </li>
    </ul>
    )
  })
  return (
    <div>
      <div> 
      <input />
      <button 
        onClick={ () => { 
            store.dispatch({
              type: 'ADD_NEW_PLAYLIST',
              name: 'send the things',
              author: 'antoin'
            })
         }}
          /> 
    </div>
    <div> {playlistData} </div>
    </div>
  )
}


export default PlaylistShow




import initialState from '../store/initialState'

const playlists = (state = initialState.playlists, action) => {
      debugger
  switch(action.type) {
    case 'ADD_NEW_PLAYLIST':
      return [
        ...state,
        { 
          name: action.name,
          author: action.author,
        }
     ]
       

     default:
      return state
  } 
};

export default playlists

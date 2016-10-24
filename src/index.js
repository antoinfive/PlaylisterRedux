import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import PlaylistShow from './components/playlistShow'
import rootReducer from './reducers/rootReducer'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

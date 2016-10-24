import React, { Component } from 'react';
import logo from './styles/logo.svg';
import PlaylistShow from './components/playlistShow'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Playlister</h2>
        </div>
          <PlaylistShow />
      </div>
    );
  }
}

export default App;

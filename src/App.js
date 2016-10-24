import React, { Component } from 'react';
import logo from './styles/logo.svg';
import { Col } from 'react-bootstrap'
import PlaylistList from './containers/playlistList'
import './styles/App.css';
import PlaylistDetail from './containers/playlistDetail'

class App extends Component {
  render() {
    return (
    <div>
       <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to My Playlister</h2>
        <PlaylistList />
        <PlaylistDetail />
    </div>
    );
  }
}

export default App;

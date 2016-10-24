import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class PlaylistDetail extends Component { 
  render() {
    if (!this.props.playlist) {
      return <div> Select a playlist to see more information </div>
    }
    const songs = this.props.playlist.songs.map( (song) => {
      return ( <ListGroupItem key={song}> {song} </ListGroupItem> )
         })
    return (
      <div> 
        <h1> Details for: </h1>
        <div> {this.props.playlist.name} </div>
        <ListGroup>
          {songs}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    playlist: state.activePlaylist
  }
}

export default connect(mapStateToProps)(PlaylistDetail)


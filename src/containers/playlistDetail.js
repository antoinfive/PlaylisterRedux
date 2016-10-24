import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlaylistDetail extends Component { 
  render() {
    if (!this.props.playlist) {
      return <div> Select a playlist to see more information </div>
    }
    return (
      <div> 
        <h1> Details for: </h1>
        <div> {this.props.playlist.name} </div>
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


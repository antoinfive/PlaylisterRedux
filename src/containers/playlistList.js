import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPlaylist } from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class PlaylistList extends Component {
  renderList() {
    return this.props.playlists.map( (playlist) => {
      return (
        <ListGroupItem 
          key={playlist.name}
          onClick={() => this.props.selectPlaylist(playlist)}
        >{playlist.name}
        </ListGroupItem>
      )
    })
  }
  render() {
    return (
      <ListGroup> 
        {this.renderList()}
      </ListGroup>
    )
  }
}

function mapStateToProps(state) {
  return { playlists: state.playlists }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPlaylist: selectPlaylist}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList)

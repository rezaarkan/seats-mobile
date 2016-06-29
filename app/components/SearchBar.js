import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class SearchBar extends Component {
  render() {
    return (
      <div className={"SearchBar clearfix " this.props.type}>
        <input className="search" />
        <i className="mdi mdi-map-marker-circle" />
      </div>
    )
  }
}

export default SearchBar

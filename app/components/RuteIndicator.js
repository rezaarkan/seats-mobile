import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class RuteIndicator extends Component {
  render() {
    return (
      <div className="RuteIndicator clearfix">
        <span className="text">Rute</span>
        <div className="rute">2B</div>
        <span className="plus">+</span>
        <div className="rute">1B</div>
      </div>
    )
  }
}

export default RuteIndicator

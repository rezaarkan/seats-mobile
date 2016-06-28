import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CariRuteInput extends Component {
  render() {
    return (
      <div className="CariRuteInput clearfix">
      	<div className="block-left">
      		<div className="circle" />
      	</div>
      	<div className="block-right">
          <div className="label">
            {this.props.label}
          </div>
          <div className="location">
            {this.props.location}
          </div>
      	</div>
      </div>
    )
  }
}

export default CariRuteInput

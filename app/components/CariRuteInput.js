import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CariRuteInput extends Component {
  render() {
    return (
      <div className={"CariRuteInput clearfix " + this.props.type}>
      	<div className="block-left">
      		<div className="circle" />
      	</div>
      	<Link to={"/"+this.props.type} className="block-right">
          <div className="label">
            {this.props.type}
          </div>
          <div className="location">
            {this.props.location}
          </div>
      	</Link>
      </div>
    )
  }
}

export default CariRuteInput

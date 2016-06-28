import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class SectionDaftarRute extends Component {
  render() {
    return (
      <div className="RuteItem clearfix">
        <div className="block-left">
          <div className="rute">
            {this.props.rute}
          </div>
        </div>
        <div className="block-right">
          <div className="halte">
            <i className="mdi mdi-store" />
            <span>{this.props.halteCount + " halte"}</span>
          </div>
          <div className="bus">
            <i className="mdi mdi-bus" />
            <span>{this.props.busCount + " bus"}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionDaftarRute

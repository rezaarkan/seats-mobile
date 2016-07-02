import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class RuteIndicator extends Component {
  render() {
    var ruteIndicator;

    if ((this.props.type=="pilih" || this.props.type=="rencana") && (this.props.ruteCount=="0")) {
      ruteIndicator=
        <div className="RuteIndicator clearfix">
          <span className="text">Rute</span>
          <div className="rute">{this.props.rute1}</div>
        </div>;
    } else if ((this.props.type=="pilih" || this.props.type=="rencana") && (this.props.ruteCount=="1")) {
      ruteIndicator=
        <div className="RuteIndicator clearfix">
          <span className="text">Rute</span>
          <div className="rute">{this.props.rute1}</div>
          <span className="plus">+</span>
          <div className="rute">{this.props.rute2}</div>
        </div>;
    } else if (this.props.type=="ruteHalte") {
      ruteIndicator=
        <div className="RuteIndicator rute-halte clearfix">
          <div className="rute">2B</div>
          <div className="rute">1B</div>
        </div>;
    } else if (this.props.type=="halte") {
      ruteIndicator=
        <div className="RuteIndicator halte clearfix">
          <div className="rute">2B</div>
          <div className="rute">1B</div>
        </div>;
    }
    
    return (
      <span>
        {ruteIndicator}
      </span>
    )
  }
}

export default RuteIndicator

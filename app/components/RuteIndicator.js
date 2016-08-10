import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';

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
    } else if (this.props.type=="ruteHalte" && this.props.ruteCount=="1") {
      ruteIndicator=
        <div className="RuteIndicator rute-halte clearfix">
          <div className="rute">2B</div>
          <div className="rute">1B</div>
        </div>;
    } else if (this.props.type=="halte") {
      ruteIndicator=
        <div className="RuteIndicator halte clearfix">
          <div className="rute">{this.props.rute1}</div>
          <div className="rute">{this.props.rute2}</div>
        </div>;
    }
    
    return (
      <span>
        <div className="RuteIndicator halte clearfix">
        {
          _.map(this.props.ruteList, (r, i)=> {
            if (i > 0) {
              var ruteElement=
                <div>
                  <span className="plus">+</span>
                  <div className="rute">{r.ruteId}</div>
                </div>;
            } else {
              var ruteElement=
                <div className="rute">{r.ruteId}</div>;
            }
            return(
              {ruteElement}
            )
          })
        }
        </div>
      </span>
    )
  }
}

export default RuteIndicator

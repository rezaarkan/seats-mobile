import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteIndicator from 'components/RuteIndicator';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ls from 'local-storage';

const styles={
  hidden: {
    display: "none",
  },
}

class PilihRuteItem extends Component {

  pilihRuteClickHandler() {
    if (this.props.transitCount > 0){
      ls.set('selectedRute1', this.props.rute1);
      ls.set('selectedRute2', this.props.rute2);
      ls.set('transitCount', this.props.transitCount);
      ls.set('selectedHalte1', this.props.halte1);
      ls.set('selectedHalte2', this.props.halte2);
      ls.set('selectedHalteTransit', this.props.halteTransit);
    } else {
      ls.set('selectedRute1', this.props.rute1);
      ls.set('transitCount', this.props.transitCount);
      ls.set('selectedHalte1', this.props.halte1);
      ls.set('selectedHalte2', this.props.halte2);
    }
  }

  render() {
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    var transitText = "";
    var transitContent;
  
    if (this.props.transitCount > 0){
      transitText = " ("+this.props.transitCount+" transit)";
      transitContent =
      <div className="transit">
        <i className="mdi mdi-directions-fork" />
        <span>{"Transit: "+this.props.halteTransit}</span>
      </div>;
    }

    return (
      <div className="PilihRuteItem clearfix">
        <Link to="/rencana-rute" onClick={this.pilihRuteClickHandler.bind(this)}>      
          <ListItem
            primaryText={
              <div>
                <RuteIndicator 
                  type={"pilih"}
                  ruteCount={this.props.transitCount}
                  rute1={this.props.rute1}
                  rute2={this.props.rute2}
                />
                <div className="halte">
                  <i className="mdi mdi-store" />
                  <span>{"Berangkat: "+this.props.halte1}</span>
                </div>
                {transitContent}
                <div className="halte">
                  <i className="mdi mdi-store" />
                  <span>{"Sampai: "+this.props.halte2}</span>
                </div>
              </div>
            }
            rightAvatar={
              <div>
                <div className="time">
                  28
                </div>
                <div className="text">
                  menit
                </div>
              </div>
            }
          >
          </ListItem>
        </Link>
        {divider}
      </div>
    )
  }
}

export default PilihRuteItem

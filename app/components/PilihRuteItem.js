import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteIndicator from 'components/RuteIndicator';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={
  hidden: {
    display: "none",
  }
}

class PilihRuteItem extends Component {

  render() {
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    var transitText = "";

    if (this.props.transitCount > 0){
      transitText = " ("+this.props.transitCount+" transit)";
    }

    return (
      <div className="PilihRuteItem clearfix">
        <Link to="/">      
          <ListItem
            primaryText={
              <RuteIndicator />
            }
            secondaryText={
              "Brgkt. dari "+this.props.halteKeberangkatan+transitText
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

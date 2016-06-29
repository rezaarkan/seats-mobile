import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteIndicator from 'components/RuteIndicator';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

var transitText = " (2 transit)";

class RencanaRuteItem extends Component {
  /*transitTextConcat() {
    if this.props.transit {
      transitText = " ("+this.props.transitCount+" transit)"
    } else{
      transitText = ""
    }
  }*/

  render() {
    return (
      <div className="RencanaRuteItem clearfix">
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
        <Divider />
      </div>
    )
  }
}

export default RencanaRuteItem

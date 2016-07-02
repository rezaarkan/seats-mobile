import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import {
  white,
  cyan500
} from 'material-ui/styles/colors';

const styles={
  rute: {
    textAlign: 'center',
    lineHeight: '28px',
    lineHeight: '1.75rem',
    fontSize: "13px",
    fontSize: "0.8125rem",
  },
  ruteLink: {
    top: '28px',
    top: '1.75rem',
    left: '18px',
    left: '1.125rem',
  },
  finish: {
    top: '17px',
    top: '1.063rem',
    left: '18px',
    left: '1.125rem',
    backgroundColor: "rgba(0,0,0,0)",
    border: "3px solid",
    boxSizing: "border-box",
    borderColor: cyan500,
  },
  hidden: {
    opacity: "0",
  }
}

class RencanaRuteItem extends Component {

  render() {
    var rencanaRuteType;
    var divider;

    if (this.props.type=="start"){
      rencanaRuteType=
        <ListItem
          disabled={true}
          leftAvatar={
            <Link to="/" style={styles.ruteLink}>
            <Avatar
              color={white}
              backgroundColor={cyan500}
              size={28}
              style={styles.rute}
            >
              {this.props.rute}
            </Avatar>
            </Link>
          }
          primaryText={
            <div className="from clearfix">
              <Link to="/"><div className="text">{this.props.location}</div></Link>
              <div className="block-left">
                <i className="mdi mdi-bus" />
                <span className="time">Bus terdekat:</span>
              </div>
              <div className="block-right">
                <span className="time">{this.props.nearestBusTime + " menit"}</span>
              </div>
            </div>
          }/>;
      divider=<Divider inset={true}/>;
    } else if(this.props.type=="journey"){
      rencanaRuteType=
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              color={white}
              backgroundColor={cyan500}
              size={28}
              style={styles.hidden}
            />
          }
          primaryText={
            <div className="journey clearfix">
              <div className="block-left">
                <span className="text">Waktu perjalanan:</span>
              </div>
              <div className="block-right">
                <span className="text">{this.props.journeyTime + " menit"}</span>
              </div>
            </div>
          }/>;
      divider=<Divider inset={true}/>;
    } else if(this.props.type=="finish"){
      rencanaRuteType=
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              className="line"
              backgroundColor={cyan500}
              size={28}
              style={styles.finish}
            />
          }
          primaryText={
            <div className="finish clearfix">
              <Link to="/"><div className="text">{this.props.location}</div></Link>
            </div>
          }/>;
      divider=<br />;
    } else if(this.props.type=="transit"){
      rencanaRuteType=
        <ListItem
          disabled={true}
          leftAvatar={
            <Link to="/" style={styles.ruteLink}>
            <Avatar
              className="line"
              color={white}
              backgroundColor={cyan500}
              size={28}
              style={styles.rute}
            >
              {this.props.rute}
            </Avatar>
            </Link>
          }
          primaryText={
            <div className="transit clearfix">
              <Link to="/"><div className="text">{"Transit: "+this.props.location}</div></Link>
              <div className="block-left">
                <i className="mdi mdi-bus" />
                <span className="time">Bus terdekat:</span>
              </div>
              <div className="block-right">
                <span className="time">{this.props.nearestBusTime + " menit"}</span>
              </div>
            </div>
          }/>;
      divider=<Divider inset={true}/>;
    }

    return (
      <div className="RencanaRuteItem clearfix">
        {rencanaRuteType}     
        {divider}
      </div>
    )
  }
}

export default RencanaRuteItem

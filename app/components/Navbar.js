import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

class Navbar extends Component {
  historyGoback(){
	browserHistory.goBack();
  }

  render() {
  	var center = 
  		<div className="center">
        	<span className="truncate">{this.props.pageName}</span>
        </div>;
  	var left = <div className="left" />;
  	var right = <div className="right" />;;

  	if (this.props.back == true) {
  		left=
  			<div className="left on" onClick={this.historyGoback}>
        		<i className="mdi mdi-keyboard-backspace" />
        	</div>;
  	}

  	if (this.props.centerFromTo == true) {
  		center=
  			<div className="center from-to">
      		<span>{this.props.from}</span>
      		<i className="mdi mdi-chevron-right" />
      		<span>{this.props.to}</span>
      	</div>;
  	}

    return (
      <div className="Navbar">
        <div className="container-mobile border-none navbar">
        	{left}
        	{right}
        	{center}
        </div>
      </div>
    )
  }
}

export default Navbar

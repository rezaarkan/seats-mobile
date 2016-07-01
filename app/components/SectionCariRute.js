import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CariRuteInput from 'components/CariRuteInput';

import RaisedButton from 'material-ui/RaisedButton';

class SectionCariRute extends Component {
  render() {
    return (
      <div className="SectionCariRute">
        <CariRuteInput 
        	label={"asal"}
        	location={"Mandala Krida"}
        />
        <CariRuteInput 
        	label={"tujuan"}
        	location={"Candi Prambanan"}
          type={"finish"}
        />
        <div className="block-button">
        	<RaisedButton label="Cari Rute" primary={true}/>
        </div>
        <br /><br />
      </div>
    )
  }
}

export default SectionCariRute

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CariRuteInput from 'components/CariRuteInput';

import RaisedButton from 'material-ui/RaisedButton';
import ls from 'local-storage';

class SectionCariRute extends Component {
  render() {
    return (
      <div className="SectionCariRute">
        <CariRuteInput 
        	type={"asal"}
        	location={ls.get('locationNameAsal')}
        />
        <CariRuteInput 
        	type={"tujuan"}
        	location={ls.get('locationNameTujuan')}
        />
        <div className="block-button">
          <Link to="/pilih-rute">
        	 <RaisedButton label="Cari Rute" primary={true}/>
          </Link>
        </div>
        <br /><br />
      </div>
    )
  }
}

export default SectionCariRute

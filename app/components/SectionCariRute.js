import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CariRuteInput from 'components/CariRuteInput';

import RaisedButton from 'material-ui/RaisedButton';
import ls from 'local-storage';

const styles={
  button:{
    width: "100%",
    borderRadius: "5px",
  }
}

class SectionCariRute extends Component {

  render() {
    var homeLocationNameAsal = ls.get('locationNameAsal') || "Pilih asal";
    var homeLocationNameTujuan = ls.get('locationNameTujuan') || "Pilih tujuan";

    return (
      <div className="SectionCariRute">
        <div className="input-box">
          <CariRuteInput 
          	type={"asal"}
          	location={homeLocationNameAsal}
          />
          <CariRuteInput 
          	type={"tujuan"}
          	location={homeLocationNameTujuan}
          />
        </div>
        <Link to="/pilih-rute">
         <RaisedButton label="Cari Rute" primary={true} style={styles.button}/>
        </Link>
        <br /><br />
      </div>
    )
  }
}

export default SectionCariRute

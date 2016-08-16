import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CariRuteInput from 'components/CariRuteInput';

import RaisedButton from 'material-ui/RaisedButton';

import _ from 'lodash';

const styles={
  button:{
    width: "100%",
    borderRadius: "5px",
  }
}

class SectionCariRute extends Component {

  render() {
    var halteAsal = this.props.pilihHalteAsal.halteAsal || {};
    var halteTujuan = this.props.pilihHalteTujuan.halteTujuan || {};

    var halteAsalName = halteAsal.halteName || "Pilih asal";
    var halteTujuanName = halteTujuan.halteName || "Pilih tujuan";

    var homeLocationNameAsal =  _.startCase(halteAsalName.toLowerCase());
    var homeLocationNameTujuan = _.startCase(halteTujuanName.toLowerCase());

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

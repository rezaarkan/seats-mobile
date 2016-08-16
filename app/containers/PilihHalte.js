import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { selectHalteAsal, selectHalteTujuan } from 'actions/pilih-halte';
import { loadDaftarHalte } from 'actions/halte';

import _ from 'lodash';

import Navbar from 'components/Navbar';
import HalteItem from 'components/HalteItemPilih';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class PilihHalte extends Component {
  componentDidMount() {
      window.scrollTo(0, 0);
  }

  haltePilihHandler = (id, nama) => {
  	let halteType = this.props.params.jenis;
    let halteId = id;
    let halteName = nama;
    if (halteType == "asal") {
      this.props.selectHalteAsal({ halteId, halteName });
      browserHistory.push("/");
    } else if (halteType == "tujuan") {
      this.props.selectHalteTujuan({ halteId, halteName });
      browserHistory.push("/");
    }
  }

  render() {
    return (
		<div className="PilihHalte">
			<Navbar back={true} pageName={"Pilih Halte"} />
			<div className="container-mobile">
		        {
		          this.props.halte.map((h)=> {
                var namaHalte = _.startCase(h.namaHalte.toLowerCase());

		            return (
		              <HalteItem
		                key={h.halteId}
		                halteName={namaHalte}
		                event={this.haltePilihHandler.bind(null, h.halteId, h.namaHalte)}
		              />
		            )
		          })
		        }
		    </div>
		</div>
    )
  }
}

function mapStateToProps(state) {
  return { rute: state.rute, halte: state.halte }
}

export default connect(mapStateToProps, { selectHalteAsal, selectHalteTujuan })(PilihHalte);

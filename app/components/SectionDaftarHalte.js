import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import HalteItem from 'components/HalteItem';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={
  ruteList: {

  },
  nestedListStyle:{
    paddingBottom: "0px",
    paddingTop: "0px",
  }
}

class SectionDaftarHalte extends Component {
  render() {
    return (
      <div className="SectionDaftarHalte">
        {
          this.props.halte.map((h)=> {
            var namaHalte = _.startCase(h.namaHalte.toLowerCase());

            return (
              <HalteItem
                key={h.halteId}
                halteName={namaHalte}
                link={"halte/"+h.halteId}
              />
            )
          })
        }

        {/*}
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 1A"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Prambanan"}
            />,
            <HalteItem
              halteName={"Jl. Solo (KR 1)"}
            />,
            <HalteItem
              halteName={"Bandara Adisucipto"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 1B"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Bandara Adisucipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti)"}
            />,
            <HalteItem
              halteName={"J-Walk"}
            />,
            <HalteItem
              halteName={"Portable Jl. Babarsari"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"RS. AU Dr.S. Hardjolukito"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Wonocatur)"}
            />,
            <HalteItem
              halteName={"Kusumanegara (Gembiraloka)"}
            />,
            <HalteItem
              halteName={"Kusumanegara 4"}
            />,
            <HalteItem
              halteName={"Kusumanegara 2"}
            />,
            <HalteItem
              halteName={"Museum Biologi"}
            />,
            <HalteItem
              halteName={"Senopati 1"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 1"}
            />,
            <HalteItem
              halteName={"Sudirman 3"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (Kosudgama)"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (UNY)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Debrito)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Ambarukmo)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Alfa)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
          ]}
        />
        */}
      </div>
    )
  }
}

export default SectionDaftarHalte

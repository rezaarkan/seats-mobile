import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Navbar from 'components/Navbar';
import RuteBusItem from 'components/RuteBusItem';
import RuteHalteItem from 'components/RuteHalteItem';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles={
  tab:{
    backgroundColor: "#154c87",
  }
}

class Rute extends Component {
  componentDidMount() {
      window.scrollTo(0, 0);  
  }
  
  historyGoback(){
   browserHistory.goBack();
  }

  render() {
    return (
      <div className="Rute">
        <Navbar back={true} pageName="Informasi Rute" />
        <div className="container-mobile">
          <div className="header">
            <div className="rute">
              2B
            </div>
            <div className="text">
              Terminal Jombor - Monjali - Terminal Condongcatur - UGM - Monjali - Taman Pintar - XT Square
            </div>
          </div>
          <Tabs
            inkBarStyle={
              {
                backgroundColor: "#00b6d9",
                height: "4px",
                marginTop: "-4px",
              }
            }
          >
            <Tab label="bus" style={styles.tab}>
              <div className="seperator">
                <span>Bus rute 2B</span>
              </div>
              <RuteBusItem
                busId={"AB 1234 CT"}
                distance={0.5}
                currentDestination={"Halte Kenari 1"}
                link={"/halte"}
                arrivingIn={"13"}
              />
              <RuteBusItem
                busId={"AB 8214 GH"}
                distance={2}
                currentDestination={"Halte Yos Sudarso"}
                arrivingIn={"27"}
              />
              <RuteBusItem
                busId={"AB 8839 HD"}
                distance={3.8}
                currentDestination={"Halte Cik Di Tiro 2"}
                arrivingIn={"39"}
              />
              <RuteBusItem
                busId={"AB 8493 LK"}
                distance={5.8}
                currentDestination={"Halte Ring Road Utara (Monjali 2)"}
                arrivingIn={"62"}
              />
              <RuteBusItem
                busId={"AB 9458 MC"}
                distance={6.3}
                currentDestination={"Halte Terminal Jombor"}
                arrivingIn={"78"}
                last={true}
              />
            </Tab>
            <Tab label="halte" style={styles.tab}>
              <div className="seperator">
                <span>Halte yang dilalui rute 2B</span>
              </div>
              <RuteHalteItem
                name={"Terminal Jombor"}
                address={"Jl. Magelang, Sinduadi, Mlati, Kabupaten Sleman"}
              />
              <RuteHalteItem
                name={"Ring Road Utara (Monjali 1)"}
                address={"Jl. Ring Road Utara, Sariharjo, Ngaglik"}
                landmark={"Monumen Jogja Kembali"}
              />
              <RuteHalteItem
                name={"AM Sangaji 2"}
                address={"Jl. A. M. Sangaji, Cokrodiningratan, Jetis"}
              />
              <RuteHalteItem
                name={"Mangkubumi 1"}
                address={"Jl. P. Mangkubumi No.56, Gowongan, Jetis"}
                landmark={"Gedung KR"}
              />
              <RuteHalteItem
                name={"Mangkubumi 2"}
                address={"Jl. Margo Utomo No.30, Gowongan, Jetis"}
                landmark={"Stasiun Tugu, Angkringan Kopi Jos"}
              />
              <RuteHalteItem
                name={"Malioboro 1"}
                address={"Jl. Malioboro, Sosromenduran, Gedong Tengen"}
                landmark={"Malioboro, Stasiun Tugu, Pasar Kembang"}
              />
              <RuteHalteItem
                name={"Malioboro 2"}
                address={"Jl. Malioboro No.27, Gedong Tengen"}
                landmark={"Pasar Beringharjo, Kampung Ketandan"}
              />
              <RuteHalteItem
                name={"Ahmad Yani"}
                address={"Jl. Margo Mulyo / Jl. A. Yani, Ngupasan, Gondomanan"}
              />
              <RuteHalteItem
                name={"Senopati 2"}
                address={"Jl. Senopati, Ngupasan, Gondomanan"}
              />
              <RuteHalteItem
                name={"Katamso 1"}
                address={"Jl. Brigjen Katamso, Keparakan, Mergangsan"}
              />
              <RuteHalteItem
                name={"Sugiono 1"}
                address={"Jl. Kol. Sugiyono, Keparakan, Mergangsan"}
              />
              <RuteHalteItem
                name={"RSI Hidayatullah"}
                address={"Jl. Veteran, Pandeyan, Umbulharjo"}
                landmark={"RSI Hidayatullah"}
              />
              <RuteHalteItem
                name={"Ngeksigondo (Diklat PU)"}
                address={"Jl. Ngeksigondo"}
              />
              <RuteHalteItem
                name={"Gedong Kuning (Dep. Kehutanan)"}
                address={"Jl. Gedongkuning Sel., Rejowinangun, Kotagede"}
              />
              <RuteHalteItem
                name={"Kusumanegara (Gembiraloka)"}
                address={"Jl. Kusumanegara, Muja Muju, Umbulharjo"}
                landmark={"Gembiraloka"}
              />
              <RuteHalteItem
                name={"Kusumanegara 4"}
                address={"Jl. Kusumanegara, Muja Muju, Umbulharjo"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
                link={"/halte"}
                last={true}
              />
            </Tab>
          </Tabs>

        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Rute);

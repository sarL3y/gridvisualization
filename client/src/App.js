import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Wind from "./StateColors/Wind";
import Solar from "./StateColors/Solar";
import Hydro from "./StateColors/Hydro";
import NG from "./StateColors/NG";
import Petroleum from "./StateColors/Petroleum";
import Nuclear from "./StateColors/Nuclear";
import Coal from "./StateColors/Coal";
import Biomass from "./StateColors/Biomass";
import Button from 'react-bootstrap/Button';
import statesCustomConfig from "./layouts/StateCustomConfig";
import './App.css';

function App() {

  const mapHandler = (event) => {
    console.log('You clicked on ' + event.target.dataset.name);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="MapDiv">
        <div className="d-none d-flex-md justify-content-center">
          <h4> Click on a State to see their energy profile</h4>
          <div className = "ButtonDiv">
            <div className="row">
            <Button variant="primary">></Button>{'  Click here for Top Ten: '}
            <Button variant="secondary" onClick={Wind}>Wind</Button>{' '}
            <Button variant="danger" onClick={Solar}>Solar</Button>{' '}
            <Button variant="primary" onClick={Hydro}>Hydro</Button>{' '}
            <Button variant="primary" onClick={NG}>Natural Gas</Button>{' '}
            <Button variant="primary" onClick={Nuclear}>Nuclear</Button>{' '}
            <Button variant="primary" onClick={Petroleum}>Petroleum</Button>{' '}
            <Button variant="primary" onClick={Coal}>Coal</Button>{' '}
            <Button variant="primary" onClick={Biomass}>Other Biomass</Button>{' '}
        </div>
    </div>
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

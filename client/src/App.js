import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Wind from "./layouts/Wind";
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
            <Button variant="primary">>>>></Button>{'  Click here for Top Ten: '}
            <Button variant="secondary" onClick={Wind}>Wind</Button>{' '}
            <Button variant="danger" onClick={Wind}>Solar</Button>{' '}
            <Button variant="primary" onClick={Wind}>Hydro</Button>{' '}
            <Button variant="primary" onClick={Wind}>Nuclear</Button>{' '}
            <Button variant="primary" onClick={Wind}>Petroleum</Button>{' '}
            <Button variant="primary" onClick={Wind}>Coal</Button>{' '}
            <Button variant="primary" onClick={Wind}>Other Biomass</Button>{' '}
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

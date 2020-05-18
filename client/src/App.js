import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import statesCustomConfig from "./layouts/StateCustomConfig";
import './App.css';

function App() {

  const mapHandler = (event) => {
    console.log('You clicked on ' + event.target.dataset.name);
  };

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <div className="d-none d-flex-md justify-content-center">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

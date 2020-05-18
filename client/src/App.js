import React from 'react';
import USAMap from "react-usa-map";
import Header from "./layouts/Header";
import './App.css';

function App() {

  const mapHandler = (event) => {
    console.log('You clicked on ' + event.target.dataset.name);
  };

  const statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
      },
      "NY": {
        fill: "#CC0000"
      },
      "MN": {
        fill: "#CC0000"
      }
    };
  };

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <div className="d-none d-flex-md justify-content-center">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
      
      </div>
    </div>
  );
}

export default App;

import React from "react";
import '../App.css';
import Wind from "../StateColors/Wind";
import Solar from "../StateColors/Solar";
import Hydro from "../StateColors/Hydro";
import NG from "../StateColors/NG";
import Petroleum from "../StateColors/Petroleum";
import Nuclear from "../StateColors/Nuclear";
import Coal from "../StateColors/Coal";
import Biomass from "../StateColors/Biomass";
import Button from 'react-bootstrap/Button';


function TopTenButtons() {
  return (
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
  );
}

export default TopTenButtons;
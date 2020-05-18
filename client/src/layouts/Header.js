import React from "react";
import '../App.css';

function Header() {
  return (
    <div className = "HeaderDiv">
      <div className="row">
        <div className="col-2">
          <h4>(appleseedlogo)</h4>
        </div>
        <div className="col-10">
        <h1 className="maintitle">Appleseed Initiative Electric Grid Visualization</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
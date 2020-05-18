import React from "react";
import '../App.css';

function Header() {
  return (
    <div className = "HeaderDiv">
      <div className="row">
      <img src="../client/public/Appleseedlogo.jpg" alt="Appleseed Logo"/>
      <h1 className="maintitle">Appleseed Initiative Electric Grid Visualization</h1>
      </div>
    </div>
  );
}

export default Header;
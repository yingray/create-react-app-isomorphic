import React from "react";

import logo from "../../assets/images/logo.svg";
import "./index.css";

export default () => (
  <div className="loading">
    <img src={logo} className="loading-logo" alt="logo" />
    <br/>
    Loading...
  </div>
);

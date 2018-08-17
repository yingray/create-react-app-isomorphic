import React from "react";

import logo from "../../assets/images/logo.svg";
import "./index.css";

export default () => (
  <div className="about">
    <header className="about-header">
      <img src={logo} className="about-logo" alt="logo" />
      <h1 className="about-title">About</h1>
    </header>
    <p className="about-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

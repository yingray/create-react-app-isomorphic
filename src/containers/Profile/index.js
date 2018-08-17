import React from "react";

import logo from "../../assets/images/logo.svg";
import "./index.css";

export default () => (
  <div className="profile">
    <header className="profile-header">
      <img src={logo} className="profile-logo" alt="logo" />
      <h1 className="profile-title">Profile</h1>
    </header>
    <p className="profile-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

import React from "react";

import logo from "../../images/nasa-logo.png";

const AppLogo = () => {
    return (
      <div className="logo-container">
        <img className="App-logo" src={logo} alt="Rotating NASA Logo" />
      </div>
    );
  };

export default AppLogo;
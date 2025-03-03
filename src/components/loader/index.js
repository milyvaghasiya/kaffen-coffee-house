import React from "react";
import Logo from "../../assets/images/logo.png";
import "./style.css";

const Loader = ({ loaded }) => {
  return (
    <div className={`loader ${loaded ? "loaded" : ""}`}>
      <div className="spinner-logo">
        <img src={Logo} alt="logo" />
        <div className="spinner-progress">
          <div className="spinner-line" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

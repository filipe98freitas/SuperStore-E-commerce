import React from "react";
import "../css/header.css";
import LogoImg from "../images/logo.png";

function header() {
  return (
    <div className="header">
      <img className="header_logo" src={LogoImg} />

      <div className="header_search">
        <input className="header_SearchInput" type="text" />
      </div>

      <div className="header_nav">
        <div className="header__option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">and Orders</span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default header;

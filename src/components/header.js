import React from "react";
import "../css/header.css";

function header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="../images/logo.png"
      />
    
    
    <div className="header_search"> 
    <input 
    className="header_SearchInput"
    type="text" /> 
  
    </div>
    
    <div className="header_nav"> 
    <div className="header__option">
        
    </div>

    <div className="header__option">
       
    </div>

    <div className="header__option">

    </div>

    
    </div>


  );
}

export default header;

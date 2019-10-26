import React from "react";
import Logo from "./logo.svg";
import "./style.scss";
const Header = () => {
  return (
    <header data-test="headerCmp">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

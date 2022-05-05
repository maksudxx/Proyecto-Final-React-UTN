import React from "react";
import LOGO from "../../assets/logo.jpg";
import { Navbar } from "../navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div>
        <h2>Videogames APP</h2>
        <img src={LOGO} alt="logo" />
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;

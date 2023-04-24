import React from "react";
import CloseButton from "./CloseButton";
import logo from "../assets/FastCache.png";

const Header = () => {
  return (
    <header className="header">
      <section className="logo-and-title">
        <img
          className="logo"
          src={logo}
          alt="FastCache Logo"
        />
        <h1 className="title">FastCache</h1>
      </section>
      <CloseButton />
    </header>
  );
};

export default Header;

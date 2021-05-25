import React from "react";
import Logo from "./logo";
import Sidebar from "./sidebar";
import Navbar from "./nav";

const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <Sidebar />
      <Navbar />
    </header>
  );
};

export default Header;

import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="main-header-sidebar--btn">
        <div className="burger-btn" />
        <div className="burger-btn" />
        <div className="burger-btn" />
      </div>
      <nav className="main-header-sidebar">
        <ul className="main-header-sidebar--list">
          <li className="main-header-sidebar--list_item">
            <a href="" className="main-header-sidebar--list_link">
              Prices
            </a>
          </li>
          <li className="main-header-sidebar--list_item">
            <a href="" className="main-header-sidebar--list_link">
              NFT
            </a>
          </li>
          <li className="main-header-sidebar--list_item">
            <a href="" className="main-header-sidebar--list_link">
              Watchlist
            </a>
          </li>
          <li className="main-header-sidebar--list_item">
            <a href="" className="main-header-sidebar--list_link">
              Exchanges
            </a>
          </li>
          <li className="main-header-sidebar--list_item">
            <a href="" className="main-header-sidebar--list_link">
              Learn
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./Header.scss";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <nav>
      <div className="left-content">
        <a href="/"> Send Freight</a>
        <div className="search-container">
          <input type="search" placeholder="Search" />
          <FiSearch class="fa fa-search position-absolute" />
        </div>
      </div>

      <div className="right-content">
        <button className="req-quote-btn"> Request Quote</button>
        <button className="book-shipment-btn">Book Shipment</button>
      </div>
    </nav>
  );
}

export default Header;

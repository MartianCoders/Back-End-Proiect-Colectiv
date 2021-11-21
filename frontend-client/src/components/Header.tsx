import React from "react";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="search-bar ms-5">
          <SearchBar />
        </div>
        <div className="sort-dropdown me-5">
          <Sort />
        </div>
      </div>
    );
  }
}

export default Header;

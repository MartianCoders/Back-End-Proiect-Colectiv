import React from "react";
import "./SearchBar.css";

import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="Search-bar">
        <div className="search-bar-child">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="Course Name" />
        </div>
        <div className="search-bar-child">
          <PersonOutlineIcon fontSize="medium" />
          <input type="text" placeholder="Tutor Name" />
          <Button className="button" variant="contained">
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

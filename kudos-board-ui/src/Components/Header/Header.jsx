import React from "react";
import "./Header.css";
import logo from "./logo.png"

const Header = ({searchInputValue, handleOnSearchInputChange}) => {
    return (
    <>
        <div className="app-header">
            <div className="head">
            <img src={logo} alt="Logo" className="logo" /> {/* Use imported image */}
            <h1 className="child1">Kudos Board</h1>
            </div>
            <input
              className="searchBar"
              type="text"
              name="search"
              placeholder="Search"
              value={searchInputValue}
              onChange={handleOnSearchInputChange}
            />
        </div>
    </>
    )
}

export default Header
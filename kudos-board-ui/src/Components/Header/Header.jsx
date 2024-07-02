import React from "react";
import "./Header.css"

const Header = ({searchInputValue, handleOnSearchInputChange}) => {
    return (
    <>
        <div className="app-header">
            <h1 className="child1">Kudos Board</h1>
            <input
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
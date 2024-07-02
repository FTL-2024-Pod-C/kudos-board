import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
    <>
        <div className="app-header">
            <h1 className="child1">{props.title}</h1>
            <input
              type="text"
              name="search"
              placeholder="Search"
            //   value={searchInputValue}
            //   onChange={handleOnSearchInputChange}
            />
        </div>
    </>
    )
}

export default Header
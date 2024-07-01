import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
    <>
        <div className="app-header">
            <h1 className="child1">{props.title}</h1>
            <input
            className="child2"
            type="text"
            placeholder="Search"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </>
    )
}

export default Header
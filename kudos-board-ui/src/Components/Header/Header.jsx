import React from "react";
import "./Header.css";
import TextField from '@mui/material/TextField';
import logo from "./logo.png"

const Header = ({searchInputValue, handleOnSearchInputChange}) => {
    return (
    <>
        <div className="app-header">
            <div className="head">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="child1">Kudos Board</h1>
            </div>

            <TextField 
                type="text" 
                label="Search" 
                variant="outlined"
                className="searchBar"
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
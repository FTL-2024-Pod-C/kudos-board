import React from "react";
import "./BoardPageHeader.css";
import logo from "./logoFroggy.png"

const BoardPageHeader = (props) => {
    return (
    <>
        <div className="app-header">
            <div className="head">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="child1">{props.boardTitle}</h1>
            </div>

        </div>
    </>
    )
}

export default BoardPageHeader
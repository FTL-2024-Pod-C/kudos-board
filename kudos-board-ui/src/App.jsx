import React from 'react'
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import BoardGrid from './Components/BoardGrid/BoardGrid.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {

  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <>
      <div className="App">
        <Header title="Kudos Board"
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
        />
        <NavBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        <BoardGrid />
        <Footer />
      </div>
    </>
  )
}

export default App

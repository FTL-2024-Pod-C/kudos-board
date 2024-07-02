import React from 'react'
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";
import BoardGrid from './Components/BoardGrid/BoardGrid.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

const DEV_BASE_URL = "http://localhost:3000"

function App() {

  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [boards, setBoards] = useState([]);

  useEffect (() => {
    const fetchBoards = async () => {
    const url = `${DEV_BASE_URL}/boards`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setBoards(response.data);
    }
    catch (error) {
      console.error("Error fetching boards", error);
    }
    }
    fetchBoards();
  }, [])

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
        <BoardGrid boards={boards}/>
        <Footer />
      </div>
    </>
  )
}

export default App

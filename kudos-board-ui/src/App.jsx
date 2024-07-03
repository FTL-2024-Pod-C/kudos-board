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

  const boardsByCategory =
    Boolean(activeCategory) && activeCategory !== "All"
      ? boards.filter((p) => p.category === activeCategory)
      : boards

  const boardsToShow = Boolean(searchInputValue)
    ? boardsByCategory.filter((p) => p.title.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1)
    : boardsByCategory

  const createNewBoard = async (newBoard) => {
    try {
      const url = `${DEV_BASE_URL}/boards`;
      const response = await axios.post(url, newBoard);
      console.log(response.data);
      setBoards([...boards, response.data]);
    }
    catch (error) {
      console.error("Error creating a new board", error);
    }
  };

  const deleteBoard = async (boardId) => {
    try {
      const url = `${DEV_BASE_URL}/boards`;
      await axios.delete(`${url}/${boardId}`);
      setBoards(boards.filter((board) => board.id !== boardId));
    }
    catch (error) {
      console.error("Error deleting a board", error);
    }
  };

  return (
    <>
      <div className="App">
        <Header
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
        />
        <NavBar
            createNewBoard={createNewBoard}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        <BoardGrid 
          boards={boardsToShow}
          deleteBoard={deleteBoard}
        />
        <Footer />
      </div>
    </>
  )
}

export default App

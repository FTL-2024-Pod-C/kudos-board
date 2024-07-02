import React from 'react'
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";
import BoardGrid from './Components/BoardGrid/BoardGrid.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import {useState, useEffect} from "react";

const DEV_BASE_URL = "http://localhost:3000"

function App() {

  const [boards, setBoards] = useState([]);

  useEffect (() => {
    const fetchBoards = async () => {
    const url = `${DEV_BASE_URL}/boards`;
    try {
      const response = await axios.get(url);
      console.log(response);
      setBoards(response.data);
    }
    catch (error) {
      console.error("Error fetching boards", error);
    }
    }
    fetchBoards();
  }, [])

  return (
    <>
      <div>
        <Header title="Kudos Board"/>
        <NavBar />
        <BoardGrid />
        <Footer />
      </div>
    </>
  )
}

export default App

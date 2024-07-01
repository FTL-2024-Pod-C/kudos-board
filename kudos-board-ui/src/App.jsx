import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import BoardGrid from './Components/BoardGrid/BoardGrid.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {

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

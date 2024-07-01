import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import BoardGrid from './Components/BoardGrid/BoardGrid.jsx';

function App() {

  return (
    <>
      <div>
        <Header title="Kudos Board"/>
        <BoardGrid />
      </div>
    </>
  )
}

export default App

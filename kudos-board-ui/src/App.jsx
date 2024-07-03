import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage.jsx"
import BoardPage from './Pages/BoardPage.jsx';
import NoPage from "./Pages/NoPage.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board/:id" element={<BoardPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React, { useState } from 'react';
import './NavBar.css';
import Modal from '../Modal/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const NavBar = ({createNewBoard, activeCategory, setActiveCategory}) => {

  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];
  const [isModalOpen, setIsModalOpen]= useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <nav className="SubNavbar">
      <div className="content">
        <div className = "row">

          <ul className="category-menu">
            {categories.map((cat) => (
                <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                  <button className="categoryButton" onClick={() => setActiveCategory(cat)}>{cat}</button>
                </li>
            ))}
              <div>
                {/* <button className="addButton" onClick={openModal}>+</button> */}
                <IconButton aria-label="add" className="addButton" onClick={openModal}>
                  <AddIcon />
                </IconButton>
                {isModalOpen && <Modal closeModal={closeModal}
                createNewBoard={createNewBoard}
                />}
              </div>
          </ul>
          
        </div>
      </div>  
    </nav>
  )
}

export default NavBar
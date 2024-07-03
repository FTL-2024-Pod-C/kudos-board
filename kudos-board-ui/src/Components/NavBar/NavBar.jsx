import React, { useState } from 'react';
import './NavBar.css';
import Modal from '../Modal/Modal';

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
                <button className="addButton" onClick={openModal}>+</button>
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
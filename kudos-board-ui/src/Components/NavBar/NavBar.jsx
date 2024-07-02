import React, { useState } from 'react';
import './NavBar.css';
import Modal from '../Modal/Modal';




function NavBar(activeCategory, setActiveCategory) {

  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];
  const [isModalOpen, setIsModalOpen]= useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <nav class="SubNavbar">
      <div class="content">
        <div class = "row">
          <ul class="category-menu">
            {categories.map((cat) => (
                <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                  <button onClick={() => setActiveCategory(cat)}>{cat}</button>
                </li>
            ))}
              <div>
                <button className="addButton" onClick={openModal}>Add Card</button>
                {isModalOpen && <Modal closeModal={closeModal} />}
              </div>
          </ul>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar
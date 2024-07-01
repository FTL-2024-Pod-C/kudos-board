import React, { useState } from 'react';
import './NavBar.css';
import Modal from '../Modal/Modal';

function NavBar() {

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
            <li class="is-active">
              <button>All</button>
            </li>
            <li class>
              <button>Recent</button>
            </li>
            <li class>
              <button>Celebration</button>
            </li>
            <li class>
              <button>Thank You</button>
            </li>
            <li class>
              <button>Inspiration</button>
            </li>
            <li>
              <div>
                <button className="addButton" onClick={openModal}>Add Card</button>
                {isModalOpen && <Modal closeModal={closeModal} />}
              </div>
            </li>
          </ul>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar
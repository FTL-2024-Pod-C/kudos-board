import React from 'react'
import './NavBar.css';

function NavBar() {
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
            <li class>
              <button>Add Card</button>
            </li>
          </ul>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar
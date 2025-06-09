import React, { useState } from 'react';
import './Buyer.css';

const Buyer = () => {
  // const [counter , setcounter] = useState(0); 
  // const [products , setproducts] = useState([]);

  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="Buyer-Home">
      <nav className="buyer-navbar">
        <div className="left-menu">
          <button onClick={toggleMenu} className="menu-button">
            ☰ Menu
          </button>  
          {isopen && (
            <ul className="dropdown-menu">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
              <li><a href="#">Category 4</a></li>
            </ul>
          )}
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </nav>
    </div>
  );
};

export default Buyer;

import './Buyer.css';
import Card from '../Components/Cards'; 
import { useState } from 'react';

const Buyer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const topBooks = [
    { title: 'Atomic Habits', author: 'James Clear', price: '350', category: 'Self-help' },
    { title: 'The Alchemist', author: 'Paulo Coelho', price: '280', category: 'Fiction' },
  ];

  const mostLikedBooks = [
    { title: '1984', author: 'George Orwell', price: '320', category: 'Dystopian' },
    { title: 'Ikigai', author: 'Héctor García', price: '400', category: 'Philosophy' },
  ];

  return (
    <div className="Buyer-Home">
      {/* Navigation Bar */}
      <nav className="buyer-navbar">
        <div className="left-menu">
          <button onClick={toggleMenu} className="menu-button">☰ Menu</button>
          {isOpen && (
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
      <div className="buyer-sections">
        <section className="book-section">
          <h2>🔥 Top Books</h2>
          <div className="card-row">
            {topBooks.map((book, i) => (
              <Card key={i} {...book} />
            ))}
          </div>
        </section>

        <section className="book-section">
          <h2> Most Liked Books</h2>
          <div className="card-row">
            {mostLikedBooks.map((book, i) => (
              <Card key={i} {...book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Buyer;

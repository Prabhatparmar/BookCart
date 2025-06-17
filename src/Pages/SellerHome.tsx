import React, { useState } from 'react';
import './SellerHome.css';

type Book = {
  title: string;
  author: string;
  price: string;
  category: string;
};

function SellerHome() {
  const [formData, setFormData] = useState<Book>({
    title: '',
    author: '',
    price: '',
    category: ''
  });

  const [bookList, setBookList] = useState<Book[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.title && formData.author && formData.price && formData.category) {
      setBookList(prev => [...prev, { ...formData }]); // ✅ Now works
      setFormData({ title: '', author: '', price: '', category: '' });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="seller-container">
      <form className="seller-form" onSubmit={handleSubmit}>
        <h1>Add Book Details</h1>

        <label>Book Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
        />

        <button type="submit">Submit</button>
      </form>

      <div className="book-list-box">
        <h2>Submitted Books</h2>
        {bookList.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <ul>
            {bookList.map((book, index) => (
              <li key={index}>
                <strong>{book.title}</strong> by {book.author} - ₹{book.price} ({book.category})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SellerHome;

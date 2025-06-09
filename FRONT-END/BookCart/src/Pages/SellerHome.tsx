import React from 'react'
import './SellerHome.css'

function SellerHome() {
  return (
    <div className="seller-container">
      <form className="seller-form">
        <h1>Add Book Details</h1>

        <label>Book Title</label>
        <input type="text" placeholder="Enter book title" />

        <label>Author</label>
        <input type="text" placeholder="Enter author name" />

        <label>Price</label>
        <input type="text" placeholder="Enter price" />

        <label>Category</label>
        <input type="text" placeholder="Enter category" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SellerHome

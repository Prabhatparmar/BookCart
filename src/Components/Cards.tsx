import './Cards.css';

type BookProps = {
  title: string;
  author: string;
  price: string;
  category: string;
};

const Card = ({ title, author, price, category }: BookProps) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
};

export default Card;

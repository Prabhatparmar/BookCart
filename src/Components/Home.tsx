import './Home.css';
import th from '../assets/th.jpg';
import th3 from '../assets/th (3).jpg'
import book2 from "..//assets/book2.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/SignUp'); 
  };
  

  return (
      <div className="container">
        <div className="navbar">
          <img src={th3} alt="logo" />
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">books</a></li>
          </ul>
          <button onClick={()=> handleRegisterClick()}>Register</button>
        </div>
       <div className="content">
        <div className="text">
          <h1>welcome to our Book mart</h1>
          <p>
            Welcome to BookMart, your ultimate destination for all things books. From timeless classics to the latest bestsellers, we bring you a diverse collection to spark curiosity and fuel your imagination. Whether you're a lifelong reader or just beginning your literary journey, BookMart is here to connect you with stories that inspire, educate, and entertain.
          </p>
        </div>
          <div className="img">
            <img src={book2} alt="intro" />
          </div>
        </div>
        <div className="action">
          <div className="action-content">
            <p>
              "Dive into the world of action-packed books where every page bursts with suspense, danger, and unstoppable momentum. From daring heroes and fierce battles to gripping chases and high-stakes missions, these stories are designed to keep your heart racing and your imagination ignited. Perfect for readers who crave excitement, fast-paced plots, and unforgettable adventures."
            </p>
            <div className="image">
              <img src={th} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;

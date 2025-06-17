import './App.css'
import SignUp from './Components/SignUp'
import Home from './Components/Home';
import  SellerHome  from './Pages/SellerHome';
import Buyer from './Pages/Buyer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/SignUp' element ={ <SignUp/>}></Route>
          <Route path='/SellerHome' element = {<SellerHome/>}></Route>
          <Route path='/Buyer' element = {<Buyer/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

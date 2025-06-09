import { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp'
import Home from './Components/Home';
import  SellerHome  from './Pages/SellerHome';
import Buyer from './Pages/Buyer';
import Cards from './Components/Cards'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/SignUp' element ={ <SignUp/>}></Route>
          <Route path='/SellerHome' element = {<SellerHome/>}></Route>
          <Route path='/Buyer' element = {<Buyer/>}></Route>
          <Route path='/cards' element={<Cards/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

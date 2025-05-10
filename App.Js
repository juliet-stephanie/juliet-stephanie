import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/Signup';
import AddProduct from './Components/AddProduct';
import GetProduct from './Components/GetProduct';
import MpesaPayment from './Components/MpesaPayment';
import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>

    <div className="App">
  
      <NavBar/>
      <Carousel/>
       <h1 className='text-white'>Welcome to stephanie-Vegetables</h1>
    <Routes>
        <Route path='/' element={<GetProduct/>}/>
      
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mpesapayment' element={<MpesaPayment/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>    
  );
}

export default App;


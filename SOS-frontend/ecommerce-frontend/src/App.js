import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Details from './pages/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyBookings from './pages/MyBookings';
import BkDetails from './pages/BkDetails';
import ForgotPwd from './pages/ForgotPwd';
import React from 'react';
import UserLayout from './layouts/UserLayout';
import AdminRoutes from './routes/AdminRoutes';
import Logout from './components/Logout';

function App() {
  require('dotenv').config()
  return (
    <div className="App">                 
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      />    
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route element={<Register />} path="register" />          
            <Route element={<Login />} path="login" />          
            <Route element={<Contact />} path="contact" />                           
            <Route element={<ForgotPwd />} path="forgot" />  
            <Route element={<MyBookings />} path="mybookings" />                                
            <Route element={<BkDetails />} path="mybdetails/:bid" />                                
            <Route element={<Products />} path="products" exact />          
            <Route element={<Products />} path="products/:cid" />          
            <Route element={<Details />} path="details/:varid" />                 
          </Route>
          <Route path="/*" element={<AdminRoutes />} /> 
                                
          <Route path="/logout" element={<Logout />} />                         
                                   
        </Routes>
        </Router>
    </div>
  );
}

export default App;

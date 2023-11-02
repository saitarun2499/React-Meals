import React from 'react';
import "./Navbar.css";
import logo from '../assets/Images/logo.jpg'
function Navbar() {
  return (
    <div className='nav'>
        <img className='nav-logo' src={logo} alt='logo'/>
        <h1 className='nav-item'>Meal Menu</h1>
    </div>
  )
}

export default Navbar
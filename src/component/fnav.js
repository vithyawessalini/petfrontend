import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import { BASE_URL } from '../config';
const Navbar = () => {
 
    
  return (
    <nav className="navbar" >
      <div className="container">
        <div className="navbar-left">
          <img src="https://charlies-care.com/wp-content/uploads/2017/11/CareLogo_1.png" alt="Pet Shop GIF" className="navbar-gif" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fabout" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/factivity" className="nav-link">
              Activities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fdonate" className="nav-link">
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fadoptdog" className="nav-link">
              Available pets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/freport" className="nav-link">
              Report a Case
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fcontact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>
          <Link to="/login" className="tooltip">
              <img
                src="https://cdn.icon-icons.com/icons2/368/PNG/512/Login_37128.png"
                style={{ width: '30px' }}
                className="login-icon"
                alt="Login"
              />
             <span className="tooltiptext">Login</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

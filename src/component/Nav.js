import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import { BASE_URL } from '../config';
const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${ BASE_URL }/getprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  return (
    <nav className="navbar" >
      <div className="container">
        <div className="navbar-left">
          <img src="https://charlies-care.com/wp-content/uploads/2017/11/CareLogo_1.png" alt="Pet Shop GIF" className="navbar-gif" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/activity" className="nav-link">
              Activities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-link">
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/adoptdog" className="nav-link">
              Available pets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-link">
              Report a Case
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>
          <Link to="/" className="tooltip">
              <img
                src="https://cdn.icon-icons.com/icons2/368/PNG/512/Login_37128.png"
                style={{ width: '30px' }}
                className="login-icon"
                alt="Login"
              />
             <span className="tooltiptext">Logout</span>
            </Link>
          </li>
          {user && (<div>
          <li>
          <Link to="/profile" className="tooltip">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOnPAaq91xDOeIxxT9lMloWMnI28uSVjdANj1ksh4qbXb_gpDNZScToiVO32F9l__UD8&usqp=CAU"
                style={{ width: '40px' }}
                className="login-icon"
                alt="Login"
              />
              <span className="tooltiptext">Profile</span> 
            </Link>
          </li>
          </div>)}
          {user && (
            <div>
          <li className="nav-item">
        <div >
          <p style={{color:'maroon',fontWeight:'bolder'}}>Hi {user.name}!</p>
          </div>
          </li>
          </div>)}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

import React from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png'; 


const Navbar = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();

  // Get the username from localStorage
  const username = localStorage.getItem('currentUsername');

  // Define pages where navbar should not show user info
  // const excludePages = ['/', '/register', '/login'];
   const shouldShowUserInfo = username;
    // && !excludePages.includes(location.pathname);

  // Check if the current page is the home page
  const isHomePage = location.pathname === '/';
   // Logout function to clear the current user
   const handleLogout = () => {
    localStorage.removeItem('currentUsername');
    navigate('/',{ replace: true }); // Redirect to login page after logout
  };
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogout} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo" />
        <h2>Certificate Management</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {shouldShowUserInfo && (
            <li className="user-info">
              <span>User:  {username}</span>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          )}
      </ul>
    </nav>
    <div className={`main-layout ${isHomePage ? '' : 'background-image'}`}>
      {children}
    </div>
    </div>
  );
};

export default Navbar;
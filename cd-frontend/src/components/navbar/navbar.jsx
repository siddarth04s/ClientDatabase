import React from 'react';
import './NavBar.css';
export default function NavBar(){
  return (
    <div>
        <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          {/* <a href="#" className="navbar-link">Login</a> */}
          <img
              src="./assets/man.png" 
              alt="Man icon"
              className="man" 
            />
        </li>
        <li className="navbar-item">
          <span className="navbar-profile">Gowtham</span>
        </li>
      </ul>
    </nav>
    </div>
    
  );

}
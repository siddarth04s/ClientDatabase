import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const [isClientsClicked, setIsClientsClicked] = useState(false);

  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setIsClientsClicked(false);
  };

  const handleClientsClick = () => {
    setIsClientsClicked(true);
    setIsDashboardClicked(false);
  };

  return (
    <div className='sidebar'>
      <h1 className='title'>Client DB</h1>
      <div className='menu-container'>
        <p className='txt'>Main Menu</p>
        <div className="menu-buttons">
          <button
            className={`menu-item ${isDashboardClicked ? 'active' : ''}`}
            onClick={handleDashboardClick}
          >
            <img
              src="./assets/db.png"
              alt="Dashboard icon"
              className="icon icon1"
            />
            Dashboard
          </button>
          <button
            className={`menu-item ${isClientsClicked ? 'active' : ''}`}
            onClick={handleClientsClick}
          >
            <img
              src="./assets/customer.png"
              alt="Clients icon"
              className="icon icon2"
            />
            Clients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;









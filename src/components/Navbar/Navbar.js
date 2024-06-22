import React, { useState } from 'react';
import './Navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const contactDetails = [
    { id: 1, type: 'Phone', value: '+1234567890' },
    { id: 2, type: 'Email', value: 'contact@example.com' },
    { id: 3, type: 'Address', value: '123 Elegant St, City, Country' }
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
          Elegant Edge
        </a>
        <button className="contact-button" onClick={toggleDropdown}>
        <i class="bi bi-list"></i>
        </button>
        {showDropdown && (
          <div className="dropdown-menu show">
            {contactDetails.map(detail => (
              <p key={detail.id} className="dropdown-item">
                {detail.type}: {detail.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

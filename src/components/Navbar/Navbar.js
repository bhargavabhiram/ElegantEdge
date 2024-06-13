import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos < currentScrollPos || currentScrollPos === 0); // Show navbar only when scrolling down or at top
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isVisible ? 'nav-scrolled' : 'navbar-hidden'}`}>
      <div className="container">
        <a className="navbar-brand" href="#">Company Name</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isVisible ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Email: contact@company.com</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Phone: +1234567890</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

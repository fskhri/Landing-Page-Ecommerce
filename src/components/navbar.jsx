import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-8 bg-white flex flex-wrap justify-between">
      <div className="flex justify-center">
        <Link to="/" className="text-blue-400 font-bold text-2xl">
          ManganCode
        </Link>
      </div>
      <div className="hidden md:flex gap-3 list-none">
        <ul className="flex gap-3 list-none">
          <li>
            <Link to="/" className="decoration-none hover:text-blue-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/products" className="decoration-none hover:text-blue-300">
              PRODUCT
            </Link>
          </li>
          <li>
            <Link to="/services" className="decoration-none hover:text-blue-300">
              SERVICE
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="decoration-none text-white hover:text-blue-300 bg-blue-400 rounded px-3 py-2"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleMobileMenuToggle}
          className="text-blue-400 focus:outline-none"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-3 list-none">
            <li>
              <Link
                to="/"
                className="decoration-none hover:text-blue-300"
                onClick={handleMobileMenuToggle}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="decoration-none hover:text-blue-300"
                onClick={handleMobileMenuToggle}
              >
                PRODUCT
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="decoration-none hover:text-blue-300"
                onClick={handleMobileMenuToggle}
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="decoration-none text-white hover:text-blue-300 bg-blue-400 rounded px-3 py-2"
                onClick={handleMobileMenuToggle}
              >
                LOGIN
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

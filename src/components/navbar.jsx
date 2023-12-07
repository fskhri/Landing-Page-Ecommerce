import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="p-8 bg-white flex flex-wrap justify-between">
      <div className="flex justify-center">
        <Link to="/" className="text-blue-400 font-bold text-2xl">
          ManganCode
        </Link>
      </div>
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
  );
}

export default Navbar;

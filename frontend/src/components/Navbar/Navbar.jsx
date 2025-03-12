import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <h2>FoodSpot</h2>
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products..."
          />
          <button className="search-btn">SEARCH</button>
        </div>
        <div className="icons">
          <div className="profile-group">
            <BiUser className="icon" />
            <div className="dropdoun-menu">
              <Link to="/login">
                <p className="dropdoun-item">Login/Sign Up</p>
              </Link>
              <Link to="/order">
                <p className="dropdoun-item">Orders</p>
              </Link>
              <p className="dropdoun-item">Logout</p>
            </div>
          </div>
          <button className="card-icon">
            <BiCart className="icon" />
            <span className="card-qty">0</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

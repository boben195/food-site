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
          <button>SEARCH</button>
        </div>
        <div className="icons">
          <div>
            <BiUser className="icon" />
            <div className="dropdoun-menu">
              <Link to="/login">
                <p>Login/Sign Up</p>
              </Link>
              <Link to="/order">
                <p>Orders</p>
              </Link>
              <p>Logout</p>
            </div>
          </div>
          <button className="card-icon">
            <BiCart className="icon" />
            <span>0</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

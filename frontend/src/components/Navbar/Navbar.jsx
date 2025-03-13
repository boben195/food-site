import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import { FaCentos } from "react-icons/fa";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  const navigete = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    navigete(path);
  };

  const { getCartCount } = useContext(FoodContext);
  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="loader">
            <FaCentos className="loader-icon" />
          </div>
        </div>
      )}
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
          <button
            className="card-icon"
            onClick={() => handleNavigation("/card")}
          >
            <BiCart className="icon" />
            <span className="card-qty">{getCartCount()}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

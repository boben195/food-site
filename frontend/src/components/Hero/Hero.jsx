import React from "react";
import hero_img from "../../assets/pasta2.png";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-top">
          <div className="hero-left">
            <h2>Enjoy Your Delicious Meal</h2>
            <h1>Discover Delicious Healthy Meal That Nourishes You</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              accusamus aspernatur vitae deserunt voluptates. Suscipit doloribus
              eos error quibusdam modi.
            </p>
            <button>Explore Our Menu</button>
          </div>
          <div className="hero-right">
            <img src={hero_img} alt="delicious pasta" />
          </div>
        </div>
        <div className="hero-button">
          <div className="hero-content">
            <div className="info-icon">
              <FaShippingFast className="hero-icon" />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Free Shipping on order</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <FiSend className="hero-icon" />
            </div>
            <div className="detail">
              <h3>Wordwide delivery</h3>
              <p>We deliver to all countries</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <BiSupport className="hero-icon" />
            </div>
            <div className="detail">
              <h3>24/7 Support</h3>
              <p>Full support on process</p>
            </div>
          </div>
          <div className="hero-content">
            <div className="info-icon">
              <MdPayment className="hero-icon" />
            </div>
            <div className="detail">
              <h3>Secure Payment</h3>
              <p>Your payment is secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

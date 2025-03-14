import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./CartTotal.css";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(FoodContext);
  return (
    <div>
      <div className="card-total-container">
        <div className="card-title">
          <h2>CART TOTAL</h2>
        </div>
        <div className="card-details">
          <div className="card-row">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmount()}
            </p>
          </div>
          <hr className="card-divider" />
          <div className="card-row">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {delivery_fee}
            </p>
          </div>
          <div className="card-row card-total">
            <b>Total</b>
            <b>
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

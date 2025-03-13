import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import { MdDelete } from "react-icons/md";
import CartTotal from "../../components/CartTotal/CartTotal";

const Card = () => {
  const { products, currency, navigate, updateQuantity, cartItems } =
    useContext(FoodContext);

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (products.length === 0) return;
    if (!cartItems || typeof cartItems !== "object") {
      setCardData([]);
      return;
    }
    const tempData = Object.entries(cartItems)
      .filter(([, quantity]) => quantity > 0)
      .map(([itemId, quantity]) => ({
        _id: itemId,
        quantity,
      }));
    setCardData(tempData);
  }, [cartItems, products]);

  return (
    <div>
      <div>
        <h2>Cart Items</h2>
      </div>
      <div className="card-content-container">
        {cardData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          if (!productData) {
            return null;
          }
          return (
            <div className="card-item" key={index}>
              <div>
                <img
                  src={productData.image}
                  alt="your wish"
                  className="product-card-image"
                />
                <div className="product-details-card">
                  <p className="card-product-name">{productData.name}</p>
                  <p className="card-product-price">
                    {currency}
                    {productData.price}
                  </p>
                </div>
              </div>
              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="quantity-input"
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, Number(e.target.value))
                }
              />
              <MdDelete
                className="delete-icon"
                onClick={() => updateQuantity(item._id, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="checkout-container">
        <div className="checkout-box">
          <CartTotal />
          <div className="checkout-btn-container">
            <button onClick={() => navigate("/checkout")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

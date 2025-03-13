import React, { createContext, useEffect, useState } from "react";
import { product } from "../assets/assets";

import { toast } from "react-toastify";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const delivery_fee = 12;

  const [products, setProducts] = useState(product);
  const [cartItems, setCartItems] = useState({});

  const addToCard = async (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);

    console.log(`${itemId} added to cart`);

    toast.success(`Added to cart`);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce(
      (totalAmount, [itemId, quantity]) => {
        const itemInfo = products.find((product) => product._id === itemId);
        return itemInfo ? totalAmount + itemInfo.price * quantity : totalAmount;
      },
      0
    );
  };

  // useEffect(() => {

  // })

  return (
    <FoodContext.Provider
      value={{
        products,
        addToCard,
        delivery_fee,
        getCartCount,
        updateQuantity,
        getCartAmount,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;

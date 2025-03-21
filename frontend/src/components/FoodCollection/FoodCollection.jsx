import React, { useContext, useState } from "react";
import { categoryItem, product } from "../../assets/assets";
import { FoodContext } from "../../context/FoodContext";

import "./FoodCollection.css";

const FoodCollection = () => {
  const { products, addToCard } = useContext(FoodContext);

  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="food-container">
        <div className="header-section">
          <h1>Discover Our Menu</h1>
          <hr className="divider" />
        </div>
        <div className="display-container">
          <div className="category-section">
            <h2>Explore Our Categories</h2>
            <ul className="caregory-list">
              {categoryItem.map((item, index) => (
                <li
                  className={category === item.category_title ? "active" : ""}
                  key={index}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.category_title ? "All" : item.category_title
                    )
                  }
                >
                  {item.category_title}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-display">
            {products.length > 0 ? (
              products
                .filter(
                  (product) =>
                    category === "All" || category === product.category
                )
                .map((product) => (
                  <div className="product-card" key={product._id}>
                    <div className="product-image">
                      <img src={product.image} alt="delicious food" />
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price-add">
                      <p>${product.price}</p>
                      <button onClick={() => addToCard(product._id)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p>No products is available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCollection;

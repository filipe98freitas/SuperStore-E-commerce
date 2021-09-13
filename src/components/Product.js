import React from "react";
import "../css/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19,99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

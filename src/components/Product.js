import React from "react";
import "../css/Product.css";

function Product(props) {
 const product = props.state.products[props.num]

  return (
    <div className="product">
    {console.log(props)}
      <div className="product_info">
        <p>{product.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{product.price}</strong>
          <div className="product_rating">
          {Array(props.rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        </p>
      </div>
      <img src={product.image} alt="Book" />

      <button className="btn-add-basket">Add to Basket </button>
    </div>
  );
  
}

export default Product;

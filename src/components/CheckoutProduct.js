import React from "react";
import "../css/CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src="https://www.dinamize.com.br/wp-content/uploads/2020/07/4-Ps-do-marketing-produto.png" alt="imagem do produto" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">Produto X</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>000</strong>
        </p>
        <div className="checkoutProduct__rating"></div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

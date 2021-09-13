import React from "react";
import "../css/Checkout.css";
import bannerImg from "../images/bannerCheckout.jpg"
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={bannerImg}
          alt="imagem do banner"
        />

        <div>
          <h2 className="checkout__title">You shopping Basket</h2>
          <CheckoutProduct/>
          <CheckoutProduct/>
          <CheckoutProduct/>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
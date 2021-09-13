import React from "react";
import "../css/Checkout.css";
import bannerImg from "../images/bannerCheckout.jpg"


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
          <h3>Hello, Usuário</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

        </div>
      </div>

      <div className="checkout__right">

      </div>
    </div>
  );
}

export default Checkout;

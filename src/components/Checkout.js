import React from "react";
import "../css/Checkout.css";
import bannerImg from "../images/bannerCheckout.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {

  const [{ basket, user}, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={bannerImg} alt="imagem do banner" />

        <div>
           <h3>Hello, {user?.email}</h3>
           <h2 className="checkout__title">Your shopping Basket</h2>

           {basket.map(item => (
            <CheckoutProduct
               key={item}
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
             />
           ))}
         </div>
       </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
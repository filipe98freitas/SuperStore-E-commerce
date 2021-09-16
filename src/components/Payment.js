import React from "react";
import "../css/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section"></div>
        <div className="payment_title">
          <h3>Delivery Adress</h3>
        </div>
        <div className="payment_adress">
          <p>{user?.email}</p>
          <p>Alameda Jaú, 1301 - Jardim Paulista, São Paulo - SP</p>
          <p>01420-001, Brasil</p>
        </div>

        <div className="payment_section"></div>
        <div className="payment_title">
          <h3>Review itens and Delivery</h3>
        </div>
        <div className="payment_items">
          {basket.map((item) => (
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
        <Link to="/">
          <button className="Button">Buy now</button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;

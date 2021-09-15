import React from "react";
import "../css/Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
 const product = props.state.products[props.num]

 const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.title._id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: props.rate,
      },
    });
  };

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

      <button onClick={addToBasket}className="btn-add-basket">Add to Basket </button>
    </div>
  );
  
}

export default Product;

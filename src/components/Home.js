import React from "react";
import "../css/Home.css";
import topH from "../images/topHome.jpg";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={topH} alt="imagem de fundo" />
        <div className="home__row">
          <Product />
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;

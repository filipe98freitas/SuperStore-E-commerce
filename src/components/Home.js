import React from "react";
import "../css/Home.css";
import topH from "../images/topHome.jpg";
import Product from "../components/Product";
import axios from "axios";

class Home extends React.Component {
  state = {
    products: [],
    num: [],
    rate: [],
    loading: true,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/caiofilipeSuperstore"
      );
      this.setState({ products: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.products.length > 0 && this.state.num.length === 0) {
      this.randomNum();
    }
    if (prevState.num !== this.state.num) {
      this.setState({ loading: false });
    }
  };

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  randomNum = () => {
    let arrNum = [];
    let arrRate = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = 0;
      while (arrNum.indexOf(randomNum) >= 0) {
        randomNum = this.getRandom(0, this.state.products.length);
      }
      arrNum.push(randomNum);
    }
    for (let i = 0; i < arrNum.length; i++) {
      let num;
      try {
        num = parseInt(this.state.products[arrNum[i]].rating.rate);
      } catch (err) {
        console.error(err);
      }
      arrRate.push(num);
    }
    this.setState({ num: arrNum, rate: arrRate });
  };

  render() {
    return (
      <div className="home">
        <div className="home_container">
          <img className="home_image" src={topH} alt="imagem de fundo" />
          {this.state.loading ? (
            <></>
          ) : (
            <div>
              <div className="home_row">
                <Product
                  key={this.state.num[0]}
                  state={this.state}
                  num={this.state.num[0]}
                  rate={this.state.rate[0]}
                />
                <Product
                  key={this.state.num[1]}
                  state={this.state}
                  num={this.state.num[1]}
                  rate={this.state.rate[1]}
                />
              </div>
              <div className="home_row">
                <Product
                  key={this.state.num[2]}
                  state={this.state}
                  num={this.state.num[2]}
                  rate={this.state.rate[2]}
                />
                <Product
                  key={this.state.num[3]}
                  state={this.state}
                  num={this.state.num[3]}
                  rate={this.state.rate[3]}
                />
                <Product
                  key={this.state.num[4]}
                  state={this.state}
                  num={this.state.num[4]}
                  rate={this.state.rate[4]}
                />
              </div>
              <div className="home_row">
                <Product
                  key={this.state.num[5]}
                  state={this.state}
                  num={this.state.num[5]}
                  rate={this.state.rate[5]}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


class ManagerProducts extends React.Component {
  state = {
    products: [],
    categories:[]
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/caiofilipeSuperstore"
      );
      this.setState({ products: [...response.data]});
      console.log(this.state);
    } catch (err) {
      console.error(err);
    }
  };



  render() {

    //Remover duplicidade da categoria
    const categoryArr = this.state.products.map((obj) => obj.category).sort()
    const newCategoryArr = categoryArr.filter((el, index) => categoryArr.indexOf(el) === index)

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="row g-3">
              <div className="col-12">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="productName"
                  required
                />
                <div id="validationName" className="valid-feedback">
                  Ok!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="productDescription" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="productDescription"
                  required
                />
                <div id="validationDescription" className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="productImage" className="form-label">
                  Image Url
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="productImage"
                  aria-describedby="validationServer03Feedback"
                  required
                />
                <div
                  id="validationServer03Feedback"
                  className="invalid-feedback"
                >
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="validationServerUsername"
                  className="form-label"
                >
                  Price
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    $
                  </span>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label htmlFor="validationServer04" className="form-label">
                  Category
                </label>
                <select
                  className="form-select is-invalid"
                  id="validationServer04"
                  aria-describedby="validationServer04Feedback"
                  required
                >
                {newCategoryArr.map((obj) => <option>{obj}</option>)}
                </select>
                <div
                  id="validationServer04Feedback"
                  className="invalid-feedback"
                >
                  Please select a valid state.
                </div>
              </div>
              <div className="col-4">
                <label htmlFor="validationServer05" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  id="validationServer05"
                  aria-describedby="validationServer05Feedback"
                  required
                />
                <div
                  id="validationServer05Feedback"
                  className="invalid-feedback"
                >
                  Please provide a valid zip.
                </div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit product
                </button>
              </div>
            </form>
          </div>
          {/* Lista de produtos */}
          <div className="col-6">
            <div className="checkoutProduct">
              <img
                className="checkoutProduct__image"
                src="https://www.dinamize.com.br/wp-content/uploads/2020/07/4-Ps-do-marketing-produto.png"
                alt="imagem do produto"
              />
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
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerProducts;

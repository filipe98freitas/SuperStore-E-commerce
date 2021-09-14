import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css/ManagerProducts.css";

class ManagerProducts extends React.Component {
  state = {
    products: [],
    categories: [],
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
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/caiofilipesuperstorecategories"
      );
      this.setState({ categories: [...response.data[0].categories] });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    //Remover duplicidade da categoria
    const newCategoryArr = this.state.categories.filter(
      (el, index) => this.state.categories.indexOf(el) === index
    );

    return (
      <div className="container">
        <div className="row">
          {/* Formulário */}
          <div className="col-6 mt-5">
            <form className="row g-3">
              <div className="col-10">
                <label htmlFor="productName" className="form-label">
                  <strong>Product Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  required
                />
              </div>
              <div className="col-10">
                <label htmlFor="productDescription" className="form-label">
                  <strong>Description</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  required
                />
              </div>
              <div className="col-10">
                <label htmlFor="productImage" className="form-label">
                  <strong>Image Url</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productImage"
                  placeholder="http://..."
                  required
                />
              </div>
              <div className="col-10">
                <label htmlFor="validationServer04" className="form-label">
                  <strong>Category</strong>
                </label>
                <select
                  className="form-select"
                  id="validationServer04"
                  aria-describedby="validationServer04Feedback"
                  required
                >
                  {newCategoryArr.map((obj) => (
                    <option>{obj}</option>
                  ))}
                </select>
              </div>
              <div className="col-5">
                <label
                  htmlFor="validationServerUsername"
                  className="form-label"
                >
                  <strong>Price</strong>
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    $
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationServerUsername"
                    placeholder="00.00"
                    required
                  />
                </div>
              </div>
              <div className="col-5">
                <label htmlFor="validationServer05" className="form-label">
                  <strong>Rating</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationServer05"
                  placeholder="0 -> 5.0"
                  required
                />
                <div>Please provide a rating 0 to 5.</div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit product
                </button>
              </div>
            </form>
          </div>
          {/* Lista de produtos */}
          <div className="col-6 mt-3">
            <h2>Product List</h2>
            <div
              className="list-group bg-white"
              style={{ maxHeight: "85vh", overflow: "scroll" }}
            >
              {this.state.products.map((productObj) => {
                return (
                  <div className="listProduct">
                    <img src={productObj.image} alt="imagem do produto" />
                    <div>
                      <p className="checkoutProduct__title">
                        {productObj.title}
                      </p>
                      <p>
                        <small>
                          $ <strong>{productObj.price}</strong>
                        </small>
                        <small>
                          Rating: <strong>{productObj.rating.rate}</strong>
                        </small>
                        <button className="btn btn-danger">Remove</button>

                        <button className="btn btn-primary">Edit</button>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerProducts;

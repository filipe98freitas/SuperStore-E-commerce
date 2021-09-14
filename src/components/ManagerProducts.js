import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css/ManagerProducts.css";

class ManagerProducts extends React.Component {
  state = {
    products: [],
    categories: [],
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {},
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
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/caiofilipeSuperstore"
      );
      this.setState({ products: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let stateClone = {
      "title": this.state.title,
      "price": this.state.price,
      "description": this.state.description,
      "category": this.state.category,
      "image": this.state.image,
      "rating": this.state.rating,
    }
    axios
      .post("https://ironrest.herokuapp.com/caiofilipeSuperstore", stateClone)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  rating = (event) => {
    this.setState((prevState) => ({
      rating: {
        ...prevState.rating,
        rate: event.target.value,
      },
    }));
  };

  removeClick = (event) => {
    try {
      const response = axios.delete(
        `https://ironrest.herokuapp.com/caiofilipeSuperstore/${event.target.value}`
      );
      this.setState({ products: [...response.data] });
    } catch (err) {console.error(err)}}

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
            <form className="row g-3" onSubmit={this.handleSubmit}>
              <div className="col-10">
                <label htmlFor="productName" className="form-label">
                  <strong>Product Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
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
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
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
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.image}
                  required
                />
              </div>
              <div className="col-10">
                <label htmlFor="productCategory" className="form-label">
                  <strong>Category</strong>
                </label>
                <select
                  className="form-select"
                  id="productCategory"
                  name="category"
                  onChange={this.handleChange}
                  value={this.state.category}
                  required
                >
                  {newCategoryArr.map((obj) => (
                    <option>{obj}</option>
                  ))}
                </select>
              </div>
              <div className="col-5">
                <label htmlFor="productPrice" className="form-label">
                  <strong>Price</strong>
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="currency">
                    $
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    placeholder="00.00"
                    name="price"
                    onChange={this.handleChange}
                    value={this.state.price}
                    required
                  />
                </div>
              </div>
              <div className="col-5">
                <label htmlFor="productRating" className="form-label">
                  <strong>Rating</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="productRating"
                  placeholder="0 -> 5.0"
                  name="rating"
                  onChange={this.rating}
                  step="0.1" min="0" max="5"
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
                        <button className="btn btn-danger" onClick={this.removeClick} value={productObj._id}>Remove</button>
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

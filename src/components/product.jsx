import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {
    quantity: 0,
  };

  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img
            src={"/imgs/products/" + this.props.data.image}
            alt="product here"
          ></img>

          <div className="title-container">
            <h4>{this.props.data.title}</h4>
            <label className="price">${this.props.data.price.toFixed(2)}</label>
          </div>

          <label className="total">
            <b>Total:</b> ${this.getTotal()}
          </label>

          <QuantityPicker
            onQuantityChange={this.handleQuantityChange}
          ></QuantityPicker>

          <button className="btn btn-sm btn-info">Add To Cart</button>
        </div>
      </React.Fragment>
    );
  }

  getTotal = () => {
    let total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };
}

export default Product;

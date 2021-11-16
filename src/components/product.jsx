import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";

import "./product.css";

class Product extends Component {
  state = {
    quantity: 1,
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

          <button
            onClick={this.handleAddToCart}
            className="btn btn-sm btn-info"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            &nbsp; Add
          </button>
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

  handleAddToCart = () => {
    console.log("Dispatching action");
    // dispatch the addToCart action
    // creat a copy of data
    // add the quantity
    // send the copy as payload
    let copy = { ...this.props.data };
    copy.quantity = this.state.quantity;
    this.props.addToCart(copy);
  };
}

/**
 * Connect the component to the store (to read/dispatch actions)
 * receives 2 params:
 * 1 - A function that maps what you want to read
 * 2 - An object with the actions you want to dispatch
 */
export default connect(null, { addToCart })(Product);

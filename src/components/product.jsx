import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
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

          
            <label>Total: ${this.props.data.price.toFixed(2)}</label>
          

          <QuantityPicker></QuantityPicker>

          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img src="https://picsum.photos/250/200" alt="product"></img>

          <h5>Product Title</h5>

          <div>
            <label>Price: $100.00</label>
            <label>Total: $200.00</label>
          </div>

          <QuantityPicker></QuantityPicker>

          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

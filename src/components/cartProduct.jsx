import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions";
import "./cartProduct.css";

class CartProduct extends Component {
  render() {
    return ( <div className="cart-product">
        
        <img src={"/imgs/products/" + this.props.product.image}
            alt="product here" />
    <h6>{this.props.product.title}</h6>
    <label>${this.props.product.price.toFixed(2)}</label>
    <label>Qty: {this.props.product.quantity}</label>
    <label>${this.getTotal()}</label>
    <button onClick={this.handleRemoveEvent} className="btn btn-sm btn-danger">Remove</button>
    </div>
    );
  }

  handleRemoveEvent = () => {
      console.log("removing product", this.props.product.id);
      this.props.removeFromCart(this.props.product.id);
  };

getTotal = () => {
    let total = this.props.product.price * this.props.product.quantity;
    return total.toFixed(2);
  };
}

export default connect(null, { removeFromCart })(CartProduct);

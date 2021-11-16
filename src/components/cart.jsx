import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "./cartProduct";

import "./cart.css";

class Cart extends Component {
  render() {
    return (
      <div className="cart-page">
        <h3>Your Cart</h3>

        <div className="products">
          {this.props.cart.map((prod) => (
            <CartProduct key={prod.id} product={prod}></CartProduct>
          ))}
        </div>



        <div className="total">
         Your total: $ {this.getTotal()}
          <button className="btn btn-primary">Checkout</button>
          <button className="btn btn-primary">Clear</button>
        </div>
      </div>
    );
  }

  /**
   * To clear the cart:
   * create an action
   * update the reducer, to delete everything when the action is dispatched
   * connect the action to cart component (don't forget the import for the action)
   * handle the click event on the button
   * dispatch the action
   */

  getTotal = () => {
    let total = this.props.cart * this.props.cart.quantity;
    return total.toFixed(2);
    // this.props.cart
    // return with 2 decimal
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps, null)(Cart);

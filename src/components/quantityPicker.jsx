import React, { Component } from "react";
import "./footer.css";

class QuantityPicker extends Component {
  state = {
    name: "Igor Boyko",
    quantity: 1,
  };
  render() {
    return (
      <div className="qp-page">
        <button
          onClick={this.increaseQuantity}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <label>{this.state.quantity}</label>
        <button
          onClick={this.decreaseQuantity}
          className="btn btn-sm btn-primary"
        >
          -
        </button>
      </div>
    );
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    // valid way of changing the state
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
}

export default QuantityPicker;

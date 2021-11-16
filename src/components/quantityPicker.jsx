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
    let q = this.state.quantity + 1;
    this.setState({ quantity: q });
    // valid way of changing the state

    this.props.onQuantityChange(q);
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      let qnty = this.state.quantity - 1;
      this.setState({ quantity: qnty });
      this.props.onQuantityChange(qnty);
    }
  };
}

export default QuantityPicker;

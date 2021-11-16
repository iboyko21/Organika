import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(103, 221, 132)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            OrganikA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <Link className="btn btn-outline-light" to="/cart">
                <i className="fa fa-shopping-cart mr-2"></i>
                &nbsp; View Cart
                <span className="badge badge-secondary">
                  {this.props.cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// return an object mapping the state to props
const mapStateToProps = (state) => {
  return {
    cartCount: state.length, // <-- will put the array in this.props.cartCount
  };
};

export default connect(mapStateToProps, null)(NavBar);

import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div className="catalog-page">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    );
  }
}

export default Catalog;

/* 

Min info for the product cmp:
- image
- title
- price
- product ID
- minimum to order
- total $

*/
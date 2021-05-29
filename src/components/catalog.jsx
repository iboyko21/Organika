import React, { Component } from "react";

import "./catalog.css";
import Product from "./product";
import ProductService from "./../services/productService";

class Catalog extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <div className="catalog-page">
        {this.state.products.map((prod) => (
          <Product key={prod.id} data={prod}></Product>
        ))}
      </div>
    );
  }

  // when the component is mounted (rendered on screen)
  componentDidMount() {
    // good place to load data (from server)
    let service = new ProductService();
    let data = service.getCatalog();

    // put data on state
    this.setState({ products: data });
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

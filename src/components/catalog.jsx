import React, { Component } from "react";

import "./catalog.css";
import Product from "./product";
import ProductService from "./../services/productService";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    let prodsToDisplay = this.state.products;

    // filter the elements inside the prodsToDisplay
    if(this.state.selectedCategory) {
      prodsToDisplay = prodsToDisplay.filter(prod => prod.category === this.state.selectedCategory);
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <button onClick={() => this.selectCategory("")} className="btn btn-secondary">Show All</button>
          
          {this.state.categories.map((cat) => (
            <button
              onClick={() => this.selectCategory(cat)}
              className="btn btn-info"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products">
          {prodsToDisplay.map((prod) => (
            <Product key={prod.id} data={prod}></Product>
          ))}
        </div>
      </div>
    );
  }

  selectCategory = (cat) => {
    console.log("User selcted:", cat);
    this.setState({ selectedCategory: cat});
  };

  // when the component is mounted (rendered on screen)
  componentDidMount() {
    // good place to load data (from server)
    let service = new ProductService();
    let data = service.getCatalog();

    // find the unique categories
    // creat loop to travel array and look for categories
    console.log(data);

    var cats = [];
    for (let i = 0; i < data.length; i++) {
      var category = data[i].category;
      if (!cats.includes(category)) {
        // if the category does not exist inside the solution array
        cats.push(category); // add it
      }
    }

    // put data on state
    this.setState({ products: data, categories: cats });
  }
}

export default Catalog;

import React, { Component } from "react";
import ProductService from "../services/productService";

class Admin extends Component {
  render() {
    return (
      <div className="admin-page px-4 py-5">
        <button onClick={this.testRead} className="btn btn-warning">
          Test Read
        </button>

        <button onClick={this.sendData} className="btn btn-primary">
          Seed Data
        </button>

        <button onClick={this.clearData} className="btn btn-danger">
          Clear My Data
        </button>
      </div>
    );
  }

  testRead = async () => {
    // get the catalog from server
    let service = new ProductService();
    let data = await service.getCatalog();
    console.log("test read:", data);
  };

  sendData = async () => {
    console.log("send data");
    let service = new ProductService();
    await service.seedData();
    console.log("data seeded, try reading it to confirm");
  };

  clearData = async () => {
    let service = new ProductService();
    await service.deleteCatalog();
    console.log("data deleted");
    // create function to clear data DELETE
  };
}

export default Admin;

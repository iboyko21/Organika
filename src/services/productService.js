var data = [
  {
    id: "5f40a6baac77a903d8f682c6",
    price: 12.32,
    stock: 13,
    title: "Cabbage",
    image: "img-1.jpg",
    discount: 5,
    category: "Vegetable",
  },
  {
    id: "5f40a6ba41d9e5044ced586c",
    price: 22.71,
    stock: 21,
    title: "Strawberry",
    image: "product-6.jpg",
    discount: 10,
    category: "Fruit",
  },
  {
    id: "5f40a6baa9e6e22fa1d5fac4",
    price: 32.0,
    stock: 20,
    title: "Bell pepper",
    image: "img-14.jpg",
    discount: 0,
    category: "Vegetable",
  },
  {
    id: "5f40a6baf0f068a497921d29",
    price: 6.99,
    stock: 10,
    title: "Carrot",
    image: "img-4.jpg",
    discount: 0,
    category: "Vegetable",
  },
  {
    id: "5f40a866337a3bb00793da52",
    price: 16.39,
    stock: 34,
    title: "Banana",
    image: "img-5.jpg",
    discount: 4,
    category: "Fruit",
  },
  {
    id: "5f40a866ea0a04e6891b7084",
    price: 14.0,
    stock: 14,
    title: "Orange",
    image: "product-10.jpg",
    discount: 0,
    category: "Fruit",
  },
  {
    id: "5f40a866ea0a04e6891212333",
    price: 12.0,
    stock: 11,
    title: "Egg",
    image: "img-15.jpg",
    discount: 12,
    minimum: 6,
    category: "Dairy & Eggs",
  },
  {
    id: "5f40a866ea0a04e68911231328",
    price: 19.1,
    stock: 11,
    title: "Orange Juice",
    image: "product-15.jpg",
    discount: 12,
    category: "Beverages",
  },
];


/**
 * Server endpoint and functionality
 * 
 * GET
 * /api/products  => get everyone's products
 * /api/products/<yourName>  -> get yours products
 * 
 * POST
 * /api/products => save products onto the DB
 * 
 * DELETE
 * /api/products/clear/<yourName> => delete your prods from DB
 */



 class ProductService {
  getCatalog() {
    // connect to a server
    // read the catalog from there

    // mock data
    return data;
  }

  getOffers() {}
  getProdDetails() {}
}

export default ProductService;



/** 
import axios from 'axios';


class ProductService {
  serverUrl = "https://fsdiapi.azurewebsites.net";

  async getCatalog() {
    // connect to a server
    // read the catalog from there
    let response = await axios.get(this.serverUrl + "/api/products/IgorBoyko");
    return response.data;
  }

  async seedData() {
    // send data from the array on the top to the server
    for(let i=0; i< data.length; i++){
      let prod = data[i];
      prod.name = "IgorBoyko";
    await axios.post(this.serverUrl + "/api/products", prod);
    }
  }

  async deleteCatalog() {
    // connect to a server
    // remove the catalog from there
    let response = await axios.delete(this.serverUrl + "/api/products/clear/IgorBoyko");
    return response.data;
  }

}

export default ProductService;
*/

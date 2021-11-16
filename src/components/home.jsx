import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="home_container">
        <div className="home_main"> 
        <h1>Welcome to OrganikA</h1>
        <p className="lead">
          We provide fresh and organic food diretly to your home. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae praesentium
          numquam, dolorem recusandae culpa blanditiis, harum nemo et unde ex
          ullam dignissimos, consequuntur tempore vel autem minima aliquid
          laborum expedita?
        </p>
        </div>
      
      <div className="bottom_container">
        <p className="lead">Check out online catalog for our products.</p>
        <Link className="home_btn" to="/catalog" role="button">
          Catalog &nbsp; <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </Link>
        </div>

      </div>
    );
  }
}

export default Home;

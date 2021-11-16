import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="about-h1">About This Project</h1>
          <p className="about-p">
            This online store was created using React + Redux for 109 Ch 18
            Class. Created by Igor Boyko for San Diego Global Knowledge
            Univercity Cohort 18.
          </p>
        </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner-title">
          <h3>hello!</h3>
          <h1>i'm Akamo Dolapo</h1>
          <p>Intermediate web developer</p>
          <Link to="/contact" className="btn btn-orange">
            hire me
          </Link>
          <Link to="/portfolio" className="btn btn-gray">
            Portfolio
          </Link>
        </div>
        <img
          src="../img/projects/mydp.jpeg"
          alt=""
          className="banner-img"
        />
      </section>
    );
  }
}

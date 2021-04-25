import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="background">
        <div class="sign">
          <span class="fast-flicker">b</span>em<span class="flicker">v</span>
          indo !
        </div>
        <div className="welcome">
          <div class="container">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
            <div class="item item-4"></div>
          </div>
        </div>
        <div className="log">
          <Link to="/login">
            <button>Logar</button>
          </Link>
        </div>
      </div>
    );
  }
}

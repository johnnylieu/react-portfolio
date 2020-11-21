import React from "react";

import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

  function Navbar () {
      return (
        <header>
        <nav className="row">
            <div className="col-md-1"></div>
            <dv className="brand ml-sm-0 col-md-3 jl">
                <Link to="/" style="color:white" id="home">Johnny Lieu</Link>
            </dv>
            <ul
                className="nav text-center col-xs-12 col-sm-12 col-md-8 justify-content0center justify-content-sm-center justify-content-md-end">
                <li className="nav-item active">
                    <Link className="nav-link disabled" to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
      )
  }

  export default Navbar;
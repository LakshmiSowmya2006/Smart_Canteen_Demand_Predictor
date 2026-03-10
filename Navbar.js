import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Smart Canteen AI
      </div>

      <div className="nav-links">

        <Link to="/">Dashboard</Link>

        <Link to="/predictions">Predictions</Link>

        <Link to="/reports">Reports</Link>

      </div>

    </nav>

  );
}

export default Navbar;
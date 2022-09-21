import React from "react";
import logo from "./img/tsf_logo.png"
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo not found"/>
        <div id="contents">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;

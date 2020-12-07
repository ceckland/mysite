import React from "react";
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="brand-logo">My Page </a> 
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/notes">Notes</NavLink></li>
          <li><NavLink to="/create_note">Create Note</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    )  
} 

export default Navbar
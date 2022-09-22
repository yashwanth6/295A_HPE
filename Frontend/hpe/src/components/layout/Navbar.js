
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Navbar = () => {
    return (

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to ="/register" className="nav-link">Register</Link>
      </li>
      <li className="nav-item">
      <Link to ="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to ="/rest_register" className="nav-link">Restaurant Register</Link>
      </li>
      <li className="nav-item">
      <Link to ="/rest_login" className="nav-link">Restaurant Login</Link>
      </li>
    </ul>
</nav>
 );
};

export default Navbar;
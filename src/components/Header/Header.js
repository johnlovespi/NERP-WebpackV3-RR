import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1><Link to='/'>NERP-Webpack-RR</Link></h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;

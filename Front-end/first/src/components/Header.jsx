import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div style={{ background: '#1e272e', padding: '1rem', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link>
    <Link to="/payment" style={{ color: '#fff', textDecoration: 'none' }}>Payment</Link>
  </div>
);

export default Header;
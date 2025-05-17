import React from 'react';
import './navbar.css';

export const Navbar = () => (
    <nav className="custom-navbar">
        <div className="navbar-brand">FakeAPI</div>
        <form className="navbar-search">
            <input type="text" placeholder="Search" />
        </form>
        <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
);

export default Navbar;
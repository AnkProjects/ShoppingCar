import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import MyRoutes from '../../router/router.jsx';

export const Navbar = ({onSearch}) => {

    const navigate = useNavigate();

    const handleProductsClick = () => {
        navigate("/products");
    }

    const handleHomeClick = () => {
        navigate("/");
    }

    return (
        <nav className="custom-navbar">
            <div className="navbar-brand">FakeAPI</div>
            <form className="navbar-search">
                <input type="text" placeholder="Search" onChange={e => onSearch(e.target.value)}/>
            </form>
            <ul className="navbar-links">
                <li><a href="#" onClick={handleHomeClick}>Home</a></li>
                <li><a href="#" onClick={handleProductsClick}>Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );


};

export default Navbar;
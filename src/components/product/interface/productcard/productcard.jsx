import React from 'react';
import './productcard.css';

export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <p>Categoría: {product.category}</p>
        </div>
    );
}
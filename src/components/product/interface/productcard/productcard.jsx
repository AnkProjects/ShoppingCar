import React from 'react';
import './productcard.css';

export function ProductCard({ product , onDetail}) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <span>${product.price}</span>
            <p>Categoría: {product.category}</p>
            <button onClick={onDetail}>Detail</button>

        </div>
    );
}
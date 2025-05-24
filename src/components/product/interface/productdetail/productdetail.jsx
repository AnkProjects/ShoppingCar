import React from 'react';
import './productdetail.css';

export function ProductDetail({ product, onClose }) {
    if (!product) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <img src={product.image} alt={product.title} style={{ width: '120px' }} />
                <h2>{product.title}</h2>
                <p><b>Precio:</b> ${product.price}</p>
                <p><b>Categoría:</b> {product.category}</p>
                <p><b>Descripción:</b> {product.description}</p>
            </div>
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import Navbar from "../../shared/navbar/navbar.jsx";
import { ProductCard } from "../../components/product/interface/productcard/productcard.jsx";
import { getAllProducts } from "../../components/product/application/fetchproduct.jsx";
import "./product-view.css";
import {ProductDetail} from "../../components/product/interface/productdetail/productdetail.jsx";

export const ProductView = ({ search }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        getAllProducts().then(setProducts);
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="main-content">
            <div className="product-view-fullscreen">
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onDetail={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </div>

    );
};

export default ProductView;
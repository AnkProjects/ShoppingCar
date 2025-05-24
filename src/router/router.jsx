import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductView from '../ui/products/product-view.jsx';
import { HomeView } from "../ui/home/home-view.jsx";

export const MyRoutes = ({ search }) => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/products" element={<ProductView search={search} />} />
            <Route path="/home" element={<HomeView search={search} />} />
        </Routes>
    );
};

export default MyRoutes;

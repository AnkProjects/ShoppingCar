import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductView from '../ui/products/product-view.jsx';

export const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductView />} />
        </Routes>
    </BrowserRouter>
)


export default MyRoutes;
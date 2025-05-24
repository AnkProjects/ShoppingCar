import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {MyRoutes} from './router/router.jsx';
import './App.css';
import Navbar from "./shared/navbar/navbar.jsx";

function App() {

    const [search, setSearch] = useState("");

    return (
        <BrowserRouter>
            <Navbar onSearch={setSearch}/>
            <MyRoutes search={search}/>
        </BrowserRouter>
    );
}

export default App;
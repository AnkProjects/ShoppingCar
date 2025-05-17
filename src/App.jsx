import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {MyRoutes} from './router/router.jsx';
import './App.css';
import Navbar from "./shared/navbar/navbar.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <MyRoutes/>
        </>
    );
}

export default App;
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import Hello from './components/Hello';
//
// $(function() {
//     let app = document.getElementById( 'app' );
//     if (app) {
//         ReactDOM.render(
//             <Hello />,
//             app
//         );
//     };
// });

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Hello";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

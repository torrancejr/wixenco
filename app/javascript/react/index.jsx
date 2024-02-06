import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../react/src/components/Hello;

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);
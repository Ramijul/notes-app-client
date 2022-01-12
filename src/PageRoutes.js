import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";


export default function PageRoutes() {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

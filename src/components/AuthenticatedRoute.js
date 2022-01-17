import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ children }) {
    const location = useLocation();
    const { isAuthenticated } = useAppContext();

    return isAuthenticated
        ? children
        : <Navigate
            to="/login"
            replace
            state={{ path: location.pathname + location.search }} />;
}

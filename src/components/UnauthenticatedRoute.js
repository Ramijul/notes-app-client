import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function UnauthenticatedRoute({ children }) {
    const { isAuthenticated } = useAppContext();

    return !isAuthenticated ? children : <Navigate to="/" replace />;
}

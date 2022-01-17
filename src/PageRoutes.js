import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";


export default function PageRoutes() {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />

            <Route path="/login" element={
                <UnauthenticatedRoute>
                    <Login />
                </UnauthenticatedRoute>
            } />

            <Route path="/signup" element={
                <UnauthenticatedRoute>
                    <Signup />
                </UnauthenticatedRoute>
            } />

            <Route path="/notes/new" element={
                <AuthenticatedRoute>
                    <NewNote />
                </AuthenticatedRoute>
            } />

            <Route path="/notes/:id" element={
                <AuthenticatedRoute>
                    <Notes />
                </AuthenticatedRoute>
            } />

            <Route path="/settings" element={
                <AuthenticatedRoute>
                    <Settings />
                </AuthenticatedRoute>
            } />
        </Routes>
    );
}

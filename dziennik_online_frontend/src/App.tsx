import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/main/Main";
import AuthProvider from "./context/AuthContext/AuthProvider";
import useAuth from "./context/AuthContext/useAuth";
import Login from './pages/login/Login';

const App = (): JSX.Element => {

    const Authenticated = (): JSX.Element => {
        const {user} = useAuth();

        return (
            user ? <Main /> : <Navigate to="/login" />
        )
    }

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Authenticated />}>
                    <Route path={'test'} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    )
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/main/Main";
import AuthProvider from "./context/AuthContext/AuthProvider";
import useAuth from "./context/AuthContext/useAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import Grades from "./pages/grades/Grades";
import Login from './pages/login/Login';
import NoMatch from "./pages/nomatch/NoMatch";

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
                    <Route index element={<Dashboard />} />
                    <Route path="oceny" element={<Grades />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>
    )
}

export default App;

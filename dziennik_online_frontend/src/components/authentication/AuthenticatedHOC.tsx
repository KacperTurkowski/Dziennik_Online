import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../context/AuthContext/useAuth";

interface Props {
    children: () => JSX.Element;
}

export const AuthenticatedHOC = ({children}: Props) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children();
}
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: () => JSX.Element;
}

export const Authenticated = ({children}: Props) => {
    const user = false;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children();
}
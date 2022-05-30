import React from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";

const Subject = (): JSX.Element => {
    const { subject } = useParams();
    const nav = useNavigate();

    return (
        <>
            Wybrany przedmiot: {subject}
        </>
    )
}

export default Subject;
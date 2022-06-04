import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface INavItem {
    link: string;
    title: string;
    icon: JSX.Element;
}

const NavItem = ({link, title, icon}: INavItem): JSX.Element => {
    const navigate = useNavigate();

    return (
        <li
            className={`list-item`}
            onClick={() => {
                navigate(`${link}`)
            }
        }>
            <div>
                <p id="icon">{icon}</p>
                <p id="title">{title}</p>
            </div>
        </li>
    )
}

export default NavItem;
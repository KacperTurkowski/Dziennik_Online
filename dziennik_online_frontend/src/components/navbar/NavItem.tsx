import React from "react";
import { useNavigate } from "react-router-dom";

interface INavItem {
    link: string;
    title: string;
    icon: JSX.Element;
    active: boolean;

    onSelect(title: string): void;
}

const NavItem = ({link, title, icon, active, onSelect}: INavItem): JSX.Element => {
    const navigate = useNavigate();

    return (
        <li
            className={`list-item ${active && 'active'}`}
            onClick={() => {
                navigate(`${link}`)
                onSelect(title);
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